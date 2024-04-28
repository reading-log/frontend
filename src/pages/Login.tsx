import { css } from '@emotion/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { onLogin } from '../apis/userApi'
import { Layout } from '../components/Layouts'
import { useToken } from '../hooks/useToken'
import { body3, calcRem, colors, flexCenter, title2 } from '../styles/theme'
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
    <Layout>
      <form css={formContainer}>
        <h2 css={title2}>ReadingLog</h2>
        <div css={inputBox}>
          <input type="text" placeholder="아이디" className="input1" {...register('email')} />
          <input type="password" placeholder="비밀번호" {...register('password')} />
        </div>
        <button type="submit" className="loginBtn">
          로그인
        </button>
      </form>
      <div css={socialLogin}>
        {socialList.map((social, index) => (
          <a key={index} href={`${import.meta.env.VITE_API_URL}oauth2/authorization/${social.site}`}>
            <img src={social.btnImage} alt={social.site} />
          </a>
        ))}
      </div>
      <div css={otherLogin}>
        <Link to="/join">회원가입</Link>
        <span />
        <Link to="/account/find-pw">비밀번호 찾기</Link>
      </div>
    </Layout>
  )
}

export default Login

const formContainer = css`
  ${flexCenter};
  flex-direction: column;

  h2 {
    margin-bottom: 3rem;
  }

  .loginBtn {
    width: 10rem;
    height: ${calcRem(25)};
    background-color: ${colors.main1};
    color: #ffffff;
  }
`

const inputBox = css`
  margin-bottom: 1rem;
  ${flexCenter};
  flex-direction: column;

  input {
    width: 10rem;
    padding: 0.2rem;
    border: 2px solid ${colors.main1};
    height: 1.8rem;
  }

  .input1 {
    border-bottom: none;
  }
`

const socialLogin = css`
  ${flexCenter};
  flex-direction: column;
  margin-top: 2rem;

  a {
    margin-bottom: 1rem;
    img {
      width: 10rem;
    }
  }
`

const otherLogin = css`
  ${flexCenter};
  margin-top: 2rem;

  a {
    ${body3};
  }

  span {
    display: inline-block;
    height: 0.8rem;
    width: 0.8px;
    background-color: ${colors.black};
    margin: 0 0.4rem;
  }
`
