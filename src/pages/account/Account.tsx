import { css } from '@emotion/react'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { FooterLayout } from '../../components/Layouts'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const Account = () => {
  const token = Cookies.get('accessToken')

  /**회원 탈퇴 */
  const leaveAccount = () => {}

  return (
    <FooterLayout>
      {true ? (
        <div css={loginBox}>
          <div className="profBox">
            {true ? (
              <div className="imgBox">
                <FontAwesomeIcon size="3x" icon={faUser} color="#ffffff" />
              </div>
            ) : (
              <img className="imgBox" src="https://via.placeholder.com/150" alt="profile" />
            )}
            <p>
              닉네임 표출
              <Link className="btn_nav" to="/account/profile">
                <FontAwesomeIcon icon={faPenToSquare} color={colors.main1} />
              </Link>
            </p>
          </div>
          <div className="accountList">
            <Link to="/account/likes">좋아요한 피드 보기</Link>
            <Link to="/account/find-pw">비밀번호 찾기</Link>
            <Link to="/account/change-pw">비밀번호 변경하기</Link>
            <button onClick={leaveAccount}>회원 탈퇴</button>
          </div>
        </div>
      ) : (
        <div css={notLoginBox}>
          <p>로그인 후 이용해주세요.</p>
          <button>로그인</button>
        </div>
      )}
    </FooterLayout>
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

  button {
    margin-top: ${calcRem(40)};
    width: ${calcRem(169)};
    height: ${calcRem(25)};
    background-color: ${colors.main1};
    color: white;
    font-size: ${calcRem(14)};
  }
`
