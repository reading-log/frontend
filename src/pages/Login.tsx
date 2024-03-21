import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { onLogin } from '../apis/userApi'
import { body2, calcRem, colors, title2 } from '../styles/common'
import { socialList } from '../utils/socialUtils'

interface IFormValues {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormValues>()

  /**로그인 요청 */
  const onHandleLogin = (data: IFormValues) => {
    onLogin(data).then(() => {
      // 로그인 성공시
    })
  }

  return (
    <div css={loginBox}>
      <form className="formBox" onSubmit={handleSubmit(onHandleLogin)}>
        <h2 css={logo}>ReadingLog</h2>
        <div css={inputBox}>
          <input type="text" placeholder="아이디" {...register('email')} />
          <input type="password" placeholder="비밀번호" {...register('password')} />
        </div>
        <button type="submit" className="loginBtn">
          로그인
        </button>
      </form>
      <div css={socialBox}>
        {socialList.map((social, index) => (
          <button key={index}>
            <img src={social.btnImage} alt={social.site} />
          </button>
        ))}
      </div>
      <div className="otherLogin">
        <Link to="/account">회원가입</Link>
        <span>|</span>
        <Link to="/account">비밀번호 찾기</Link>
      </div>
    </div>
  )
}

export default Login

const loginBox = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${body2}
  font-family: "AppleSDGothicNeo", sans-serif;

  .formBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loginBtn {
    width: ${calcRem(169)};
    height: ${calcRem(25)};
    background-color: ${colors.main1};
    color: #ffffff;
  }

  .otherLogin {
    margin-top: ${calcRem(76)};
    span {
      margin: 0 ${calcRem(3)};
    }
  }
`

const logo = css`
  ${title2}
  margin-top: ${calcRem(180)};
  margin-bottom: ${calcRem(67)};
`

const inputBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${calcRem(16)};

  input {
    width: ${calcRem(169)};
    height: ${calcRem(25)};
  }
`

const socialBox = css`
  margin-top: ${calcRem(54)};
  display: flex;
  flex-direction: column;
  gap: ${calcRem(15)};

  img {
    width: ${calcRem(169)};
    height: ${calcRem(40)};
  }
`
