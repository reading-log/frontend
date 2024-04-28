import { css } from '@emotion/react'
import { faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { onDeleteUser, onLogout, useGetUser } from '../../apis/userApi'
import { Layout } from '../../components/Layouts'
import { LoadingIndicator } from '../../elements/Loading'
import { body2, colors, flexCenter } from '../../styles/theme'

const Account = () => {
  const token = Cookies.get('accessToken')

  /**유저정보 조회 */
  const { data, isLoading } = useGetUser(token)
  const user = data?.data

  /**로그아웃 */
  const logoutUser = () => {
    onLogout().then(() => {
      delete axios.defaults.headers.common['Authorization']
      Cookies.remove('accessToken')
    })
  }

  /**회원 탈퇴 */
  const leaveAccount = () => {
    //이메일로 가입한 회원 탈퇴
    if (user.role === 'MEMBER_NORMAL') {
      const userAnswer = prompt('정말로 탈퇴하시겠습니까? 계정의 이메일을 재입력해주세요.')
      if (userAnswer) {
        onDeleteUser(userAnswer)
          .then(() => {
            delete axios.defaults.headers.common['Authorization']
            Cookies.remove('accessToken')
            setIsLogin(false)
            alert('회원 탈퇴가 완료되었습니다.')
          })
          .catch(() => alert('이메일이 일치하지 않습니다. 다시 시도해주세요.'))
      }
    } else {
      //소셜로그인 회원 탈퇴 : todo
    }
  }

  return (
    <Layout isFooter>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div css={accountContainer}>
          {!!token ? (
            <>
              <div className="loginBox">
                {user?.profileImg ? (
                  <img className="imgBox" src={user.profileImg} alt="profile" />
                ) : (
                  <div className="imgBox">
                    <FontAwesomeIcon size="3x" icon={faUser} color="#ffffff" />
                  </div>
                )}
                <div className="userInfoBox">
                  <p>{user?.nickname}</p>
                  <Link
                    className="btn_nav"
                    to="/account/profile"
                    state={{
                      userData: user,
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} color={colors.main1} />
                  </Link>
                </div>
              </div>
              <div className="accountList">
                <Link to="/account/likes">좋아요한 피드 보기</Link>
                <Link to="/account/change-pw">비밀번호 변경하기</Link>
                <button onClick={logoutUser}>로그아웃</button>
                <button onClick={leaveAccount}>회원 탈퇴</button>
              </div>
            </>
          ) : (
            <div className="notLoginUserBox">
              <p>로그인 후 이용해주세요.</p>
              <Link className="loginBtn" to="/login">
                로그인
              </Link>
            </div>
          )}
        </div>
      )}
    </Layout>
  )
}

export default Account

export const accountContainer = css`
  padding: 1rem;
  height: calc(100vh - 5rem);

  .loginBox {
    width: 100%;
    height: 12rem;
    padding: 1rem;
    border: 2px solid ${colors.boxStroke};
    border-radius: 0.5rem;

    ${flexCenter};
    flex-direction: column;

    .imgBox {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 1.2rem;
      background-color: ${colors.main1};
      ${flexCenter};
    }

    .userInfoBox {
      display: flex;
      align-items: center;

      .btn_nav {
        margin-left: 0.5rem;
      }
    }
  }

  .accountList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;

    button {
      padding: 0;
      font: inherit;
      text-align: inherit;
    }
  }

  //비로그인 유저
  .notLoginUserBox {
    ${flexCenter};
    flex-direction: column;
    height: 12rem;
    border: 2px solid ${colors.boxStroke};
    border-radius: 0.5rem;

    .loginBtn {
      margin-top: 1rem;
      ${flexCenter};
      width: 12rem;
      height: 1.5rem;
      background-color: ${colors.main1};
      color: #ffffff;
      ${body2};
    }
  }
`
