import { css } from '@emotion/react'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { body2, body3, colors } from '../../../styles/theme'

const BookDate = () => {
  return (
    <div css={recordDateBox}>
      <div className="bookMark">
        <FontAwesomeIcon icon={faBookBookmark} color={colors.main1} />
        기록
      </div>
      <div className="dateList">
        <div className="dateBox">2021.09.10</div>
        <div className="dateBox">2021.09.10</div>
        <div className="dateBox">2021.09.10</div>
        <div className="dateBox">2021.09.10</div>
      </div>
    </div>
  )
}

export default BookDate

const recordDateBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;

  .bookMark {
    ${body2};
    display: flex;
    gap: 0.5rem;
    margin-right: 1.5rem;
    white-space: nowrap;
  }

  .dateList {
    display: flex;
    gap: 0.5rem;
    white-space: nowrap;
    overflow-x: auto; /* 가로 스크롤 추가 */
    flex-wrap: nowrap;
  }

  .dateBox {
    ${body3};
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
`
