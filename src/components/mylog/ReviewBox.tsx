import { css } from '@emotion/react'
import SaveButton from './SaveButton'

type ReviewType = {
  review: string
  showReview: boolean
  changeReview: boolean
  setChangeReview: (setter: boolean) => void
}

const ReviewBox: React.FC<ReviewType> = ({ review, showReview, changeReview, setChangeReview }) => {
  const previewReview = '서평은 1000자 이내로만 기입할 수 있습니다.'

  const handleCancel = () => {
    // 서평 수정 중일 때 취소하기
    if (setChangeReview) {
      setChangeReview(false)
    }
  }

  return (
    <div css={showReview ? innerBox : [hide, innerBox]}>
      {changeReview ? ( // 서평 수정할 경우
        <>
          <textarea
            css={css`
              height: 46.7rem;
            `}
            maxLength={1000}
            placeholder={previewReview}
            defaultValue={review}
          ></textarea>
          <div css={sortButton}>
            <button onClick={handleCancel}>취소하기</button>
            <SaveButton />
          </div>
        </>
      ) : (
        <p>{review}</p>
      )}
    </div>
  )
}

export default ReviewBox

const innerBox = css`
  background: #ffffff;
  height: auto;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
  p:nth-of-type(2) {
    /* page */
    font-size: 11px;
    float: right;
  }
  textarea {
    background: #f6f3f3;
    width: 100%;
    border: none;
    word-wrap: break-word;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`

const hide = css`
  display: none;
`

const sortButton = css`
  width: auto;
  margin-top: 1rem;
  button {
    width: 9rem;
    font-weight: bold;
    border: 1px solid #947a7a;
    border-radius: 6px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`
