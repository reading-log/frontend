import { css } from '@emotion/react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { body2, colors } from '../../../styles/theme'

/**상세 책 한줄평 조회 */
const BookComment = () => {
  return (
    <div css={bookComment}>
      <div className="header">
        <p className="title">한줄평</p>
        <FontAwesomeIcon icon={faEllipsisVertical} color={colors.gray} />
      </div>
      {true ? (
        <div className="comment">
          <p>책을 읽고 느낀 점을 기록해보세요.</p>
        </div>
      ) : (
        <div className="comment">
          <textarea placeholder="한줄평을 입력해주세요." maxLength={50} />
        </div>
      )}
    </div>
  )
}

export default BookComment

const bookComment = css`
  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    .title {
      font-weight: 600;
    }
  }

  .comment {
    ${body2};
    padding: 1rem 0.5rem;
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;

    textarea {
      width: 100%;
      height: 3.5rem;
      padding: 0.5rem;
      border: none;
      background-color: ${colors.edit_innerboxFill};
    }
  }
`
