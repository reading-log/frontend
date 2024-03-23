import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { HeaderLayout } from '../components/Layouts'
import { calcRem, colors, flexCenter } from '../styles/common'

interface IFormValues {
  profileImage: File[]
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

const Join = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>()

  /**이미지 url */
  const profileImage = watch('profileImage')

  const onHandleJoin = (data: IFormValues) => {
    console.log(data)
  }

  return (
    <HeaderLayout>
      <form css={container}>
        <p>이메일로 회원가입하기</p>
        <label css={profileImgBox} htmlFor="profile_img">
          {profileImage?.[0] ? <img src={URL.createObjectURL(profileImage?.[0])} /> : <span>프로필 사진</span>}
          <input type="file" id="profile_img" {...register('profileImage')} />
        </label>
        <div css={joinBox} onSubmit={handleSubmit(onHandleJoin)}>
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" placeholder="이메일을 입력해주세요." {...register('email')} />
          </div>
          <div className="field">
            <label htmlFor="nickname">닉네임</label>
            <input type="nickname" id="nickname" placeholder="닉네임을 입력해주세요." {...register('nickname')} />
          </div>
          <div className="field">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호를 입력해주세요." {...register('password')} />
            <span>8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</span>
          </div>
          <div className="field">
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input type="password" id="passwordConfirm" placeholder="비밀번호를 한번 더 입력해주세요." {...register('passwordConfirm')} />
          </div>
          <button className="btn1" type="submit">
            회원가입
          </button>
          <button className="btn2" type="button">
            돌아가기
          </button>
        </div>
      </form>
    </HeaderLayout>
  )
}

export default Join

const container = css`
  ${flexCenter}
  flex-direction: column;
  p {
    margin-top: ${calcRem(35)};
    margin-bottom: ${calcRem(14)};
  }
`
/**프로필 사진 박스 */
const profileImgBox = css`
  width: ${calcRem(100)};
  height: ${calcRem(100)};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${calcRem(39)};
  background-color: #d9d9d9;

  ${flexCenter}

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

/**회원가입 박스 */
const joinBox = css`
  ${flexCenter}
  flex-direction: column;
  .field {
    margin-bottom: ${calcRem(13)};
    display: flex;
    flex-direction: column;
  }

  input {
    border: 1px solid ${colors.main1};
    width: ${calcRem(300)};
    height: ${calcRem(33)};
  }

  label {
    margin-bottom: ${calcRem(3)};
  }

  span {
    color: ${colors.red};
    margin-top: ${calcRem(3)};
    font-size: ${calcRem(12)};
  }

  button {
    width: ${calcRem(300)};
    height: ${calcRem(33)};

    &.btn1 {
      margin-top: ${calcRem(23)};
      color: #ffffff;
      background-color: ${colors.main1};
    }

    &.btn2 {
      margin-top: ${calcRem(11)};
      border: 1px solid ${colors.main1};
      color: ${colors.main1};
      background-color: ${colors.bg2};
    }
  }
`
