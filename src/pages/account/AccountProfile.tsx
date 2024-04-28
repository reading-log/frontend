import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { useModifyUser } from '../../apis/userApi'
import { Layout } from '../../components/Layouts'
import { colors, flexCenter } from '../../styles/theme'
import { handleKeyDown } from '../../utils/onKeyDownEnter'

const AccountProfile = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { handleSubmit, register, watch } = useForm()

  /**이미지 url */
  const profileImage = watch('profileImage')

  const editUserMutation = useModifyUser()

  /**프로필 수정 전송 */
  const editProfile = (data: { profileImage?: FileList; nickname?: string }) => {
    const { profileImage, nickname } = data

    const formData = new FormData()
    if (profileImage?.[0]) formData.append('profileImg', profileImage[0])
    if (nickname) formData.append('nickname', nickname)

    // FormData 안에 값이 있는지 여부 확인
    let hasFormData = false
    for (const {} of formData.entries()) {
      hasFormData = true
      break
    }

    // 폼 데이터가 비어있지 않으면 데이터 보내기
    if (hasFormData) {
      editUserMutation.mutate(formData, {
        onSuccess: () => {
          navigate('/account')
        },
      })
    }
  }

  return (
    <Layout isFooter>
      <form css={profileContainer} onSubmit={handleSubmit(editProfile)} onKeyDown={handleKeyDown}>
        <div className="editBox">
          <label className="userInfoBox" htmlFor="profile_img">
            {profileImage?.[0] ? <img src={URL.createObjectURL(profileImage[0])} /> : <img src={state?.userData?.profileImg} />}
            <input type="file" accept="image/*" id="profile_img" {...register('profileImage')} />
          </label>
          <input className="nick_input" type="text" placeholder="닉네임" {...register('nickname')} defaultValue={state?.userData?.nickname} />
          <button className="cancle_btn" type="button" onClick={() => navigate('/account')}>
            취소하기
          </button>
          <button className="edit_btn" type="submit">
            확인하기
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default AccountProfile

const profileContainer = css`
  height: calc(100vh - 5rem);
  padding: 1rem;

  .editBox {
    width: 100%;
    height: 18rem;
    border: 2px solid ${colors.boxStroke};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .nick_input {
    width: 10rem;
    margin-bottom: 1.5rem;
    background-color: ${colors.innerBoxStroke};
    border: none;
    text-align: center;
  }

  .userInfoBox {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    overflow: hidden;

    margin: 1.5rem 0;
    background-color: ${colors.main1};
    ${flexCenter};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }

  button {
    width: 95%;
    padding: 0.2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .cancle_btn {
    border: 2px solid ${colors.button2};
  }
  .edit_btn {
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }
`
