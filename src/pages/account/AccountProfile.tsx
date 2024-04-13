import { css } from '@emotion/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { AllLayout } from '../../components/Layouts'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const AccountProfile = () => {
  const { handleSubmit, register, watch } = useForm()

  /**이미지 url */
  const profileImage = watch('profileImage')

  /**프로필 수정 전송 */
  const editProfile = () => {}

  return (
    <AllLayout>
      <form css={profBox} onSubmit={handleSubmit(editProfile)}>
        <label css={profileImgBox} htmlFor="profile_img">
          {profileImage?.[0] ? <img src={URL.createObjectURL(profileImage?.[0])} /> : <FontAwesomeIcon size="3x" icon={faUser} color="#ffffff" />}
          <input type="file" accept="image/*" id="profile_img" {...register('profileImage')} />
        </label>
        <input className="nick_input" type="text" placeholder="닉네임" {...register('nickname')} />
        <button className="cancle_btn" type="submit">
          취소하기
        </button>
        <button className="edit_btn" type="button">
          확인하기
        </button>
      </form>
    </AllLayout>
  )
}

export default AccountProfile

const profBox = css`
  margin-top: ${calcRem(35)};
  padding: 1rem;
  border-radius: ${calcRem(6)};
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.boxStroke};
  ${flexCenter};
  flex-direction: column;

  .nick_input {
    width: 10rem;
    background-color: ${colors.innerBoxStroke};
    border: none;
    text-align: center;
    margin-bottom: ${calcRem(44)};
  }

  button {
    width: 100%;
    padding: ${calcRem(4)};
    border-radius: ${calcRem(6)};

    margin-bottom: ${calcRem(3)};
  }
  .cancle_btn {
    border: 2px solid ${colors.button2};
  }
  .edit_btn {
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }
`
/**프로필 사진 박스 */
const profileImgBox = css`
  width: ${calcRem(100)};
  height: ${calcRem(100)};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${calcRem(25)};
  background-color: ${colors.main1};
  ${flexCenter};
  span {
    font-size: ${calcRem(14)};
    font-weight: 500;
    color: ${colors.gray};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`
