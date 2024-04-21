import { css } from '@emotion/react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetUser } from '../../apis/userApi'
import { FooterLayout } from '../../components/Layouts'
import { LoadingIndicator } from '../../elements/Loading'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const Account = () => {
  const token = Cookies.get('accessToken')
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setIsLogin(!!token)
  }, [token])

  const { data, isLoading } = useGetUser(isLogin)
  const user = data?.data

  /**로그아웃 */
  const logoutUser = () => {
    Cookies.remove('accessToken')
    setIsLogin(false)
  }

  /**회원 탈퇴 */
  const leaveAccount = () => {}

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <FooterLayout>
        {isLogin ? (
          <div css={loginBox}>
            <div className="profBox">
              {!user?.profileImg ? (
                <div className="imgBox">
                  <FontAwesomeIcon size="3x" icon={faUser} color="#ffffff" />
                </div>
              ) : (
                <img className="imgBox" src={user?.profileImg} alt="profile" />
              )}
              <p>
                {user?.nickname}
                <Link
                  className="btn_nav"
                  to="/account/profile"
                  state={{
                    userData: user,
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} color={colors.main1} />
                </Link>
              </p>
            </div>
            <div className="accountList">
              <Link to="/account/likes">좋아요한 피드 보기</Link>
              <Link to="/account/find-pw">비밀번호 찾기</Link>
              <Link to="/account/change-pw">비밀번호 변경하기</Link>
              <button onClick={logoutUser}>로그아웃</button>
              <button onClick={leaveAccount}>회원 탈퇴</button>
            </div>
          </div>
        ) : (
          <div css={notLoginBox}>
            <p>로그인 후 이용해주세요.</p>
            <Link className="loginBtn" to="/login">
              로그인
            </Link>
          </div>
        )}
      </FooterLayout>
    </>
  )
}

export default Account

const loginBox = css`
  margin-top: ${calcRem(100)};
  .profBox {
    padding: 1rem;
    border-radius: ${calcRem(6)};
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.boxStroke};
    ${flexCenter};
    flex-direction: column;

    .imgBox {
      width: ${calcRem(100)};
      height: ${calcRem(100)};
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: ${calcRem(10)};
      background-color: ${colors.main1};
      ${flexCenter};
    }

    margin-bottom: ${calcRem(52)};
  }

  .accountList {
    display: flex;
    flex-direction: column;
    gap: ${calcRem(17)};

    button {
      padding: 0;
      font: inherit;
      text-align: inherit;
    }
  }

  .btn_nav {
    margin-left: ${calcRem(6)};
  }
`

const notLoginBox = css`
  margin-top: ${calcRem(100)};
  border-radius: ${calcRem(6)};
  width: 100%;
  height: 10rem;
  border: 2px solid ${colors.boxStroke};
  ${flexCenter};
  flex-direction: column;

  .loginBtn {
    ${flexCenter};
    margin-top: ${calcRem(40)};
    width: ${calcRem(169)};
    height: ${calcRem(25)};
    background-color: ${colors.main1};
    color: white;
    font-size: ${calcRem(14)};
  }
`
