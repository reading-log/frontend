import { css } from '@emotion/react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { body2, body3, colors } from '../../../styles/theme'

const BookUserInfo = () => {
  return (
    <div css={detailBox}>
      <div className="userInfoBox">
        <img />
        <div>
          <p className="userName">닉네임은여덟글자</p>
        </div>
        <div className="userHeart">
          <FontAwesomeIcon icon={faHeart} size="1x" />
          <p>23</p>
        </div>
      </div>
    </div>
  )
}

export default BookUserInfo

const detailBox = css`
  // 유저 정보 박스
  .userInfoBox {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.5rem 0.5rem;
    background-color: ${colors.boxFill};
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: ${colors.main1};
    }

    .userName {
      ${body2};
      margin-bottom: 0.5rem;
    }

    .userDate {
      ${body3};
    }

    .userHeart {
      margin-left: auto;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5rem;
        margin-bottom: 0.1rem;
        ${body2};
      }
    }
  }
`
