import { css } from '@emotion/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { onLogin } from '../apis/userApi'
import { useToken } from '../hooks/useToken'
import { body2, calcRem, colors, title2 } from '../styles/theme'
import { socialList } from '../utils/socialUtils'
import NotAllow from './NotAllow'

interface IFormValues {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<IFormValues>()

  /**로그인 요청 */
  const onHandleLogin = (data: IFormValues) => {
    if (data.email === '' || data.password === '') return alert('아이디와 비밀번호를 입력해주세요.')
    onLogin(data)
      .then(res => {
        //헤더에서 토큰 가져와서 쿠키에 저장
        const token = res.headers.authorization
        Cookies.set('accessToken', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        navigate('/readinglog')
      })
      .catch(() => alert('아이디 또는 비밀번호가 일치하지 않습니다.'))
  }

  /**로그인 되어있으면 리턴 */
  const isLogin = useToken()
  if (isLogin) return <NotAllow />

  return (
    <div css={loginBox}>
      <form className="formBox" onSubmit={handleSubmit(onHandleLogin)}>
        <h2 css={logo}>ReadingLog</h2>
        <div css={inputBox}>
          <input type="text" placeholder="아이디" className="input1" {...register('email')} />
          <input type="password" placeholder="비밀번호" {...register('password')} />
        </div>
        <button type="submit" className="loginBtn">
          로그인
        </button>
      </form>
      <div css={socialBox}>
        {socialList.map((social, index) => (
          <a key={index} href={`${import.meta.env.VITE_API_URL}oauth2/authorization/${social.site}`}>
            <img src={social.btnImage} alt={social.site} />
          </a>
        ))}
      </div>
      <div className="otherLogin">
        <Link to="/join">회원가입</Link>
        <span />
        <Link to="/account/find-pw">비밀번호 찾기</Link>
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
    display: flex;
    margin: ${calcRem(70)} 0;
    font-size: ${calcRem(12)};
    span {
      display: inline-block;
      height: ${calcRem(12)};
      width: ${calcRem(1)};
      background-color: #000000;
      margin: 0 ${calcRem(5)};
    }
  }
`

const logo = css`
  ${title2}
  margin-top: ${calcRem(100)};
  margin-bottom: ${calcRem(67)};
`

const inputBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${calcRem(16)};

  input {
    border: 2px solid ${colors.main1};
    width: ${calcRem(169)};
    height: ${calcRem(25)};
  }

  .input1 {
    border-bottom: none;
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
