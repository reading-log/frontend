import { css } from '@emotion/react'
import { useState } from 'react'
import SaveButton from './SaveButton'
import SnowmanButton from './SnowmanButton'
import { Review } from '../../types/feed'

type ReviewType = {
  reviewList: Review[]
  showReview: boolean
  changeReview: boolean
  setChangeReview: (setter: boolean) => void
}

const ReviewBox: React.FC<ReviewType> = ({ reviewList, showReview, changeReview, setChangeReview }) => {
  const [reviews, setReviews] = useState(reviewList.map(review => ({ ...review, editing: false, cancelSaveVisible: false })))

  const previewReview = '서평은 1000자 이내로만 기입할 수 있습니다.'

  const handlePlus = () => {
    const newReview = {
      content: '',
      editing: false, // 새로운 서평 추가 시 editing 상태는 false로 설정
      cancelSaveVisible: false,
    }
    setReviews(prev => [...prev, newReview])
  }

  const handleCancel = (index: number) => {
    const updatedReviews = [...reviews]
    updatedReviews[index].content = reviewList[index].content
    updatedReviews[index].editing = false
    updatedReviews[index].cancelSaveVisible = false
    setReviews(updatedReviews)
    setChangeReview(false)
  }

  const handleEdit = (index: number) => {
    const updatedReviews = [...reviews]
    updatedReviews[index].editing = true
    updatedReviews[index].cancelSaveVisible = true
    setReviews(updatedReviews)
    setChangeReview(true)
  }

  const handleSave = (index: number) => {
    const updatedReviews = [...reviews]
    updatedReviews[index].editing = false
    updatedReviews[index].cancelSaveVisible = false
    setReviews(updatedReviews)
    setChangeReview(false)
  }

  return (
    <>
      {reviews.map((review, index) => (
        <div key={index} css={showReview ? innerBox : [hide, innerBox]}>
          {review.editing ? ( // 해당 요소 수정 중일 때
            <>
              <textarea
                css={css`
                  height: 10rem;
                `}
                maxLength={1000}
                placeholder={previewReview}
                defaultValue={review.content}
                onChange={e => {
                  const updatedReviews = [...reviews]
                  updatedReviews[index].content = e.target.value
                  setReviews(updatedReviews)
                }}
              ></textarea>
              {review.cancelSaveVisible && (
                <div css={sortButton}>
                  <button onClick={() => handleCancel(index)}>취소하기</button>
                  <SaveButton onClick={() => handleSave(index)} />
                </div>
              )}
            </>
          ) : (
            // 해당 요소 수정 중이 아닐 때
            <>
              {showReview && <SnowmanButton onClick={() => handleEdit(index)} />} {/* 수정&삭제 버튼 */}
              <p>{review.content}</p>
            </>
          )}
        </div>
      ))}
      {!changeReview &&
        showReview && ( // 수정 중이 아닐 때만 + 버튼 표시
          <button css={plus} onClick={handlePlus}>
            +
          </button>
        )}
    </>
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
  p {
    margin-bottom: 0.5rem;
  }
  textarea {
    background: #f6f3f3;
    width: 100%;
    border: none;
    word-wrap: break-word;
    padding: 0.5rem 1rem;
  }
`

const hide = css`
  display: none;
`

const plus = css`
  width: 100%;
  height: 29px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  margin: auto;
  margin-top: 0.5rem;
  &:hover {
    background: #dad1d1;
  }
`

const sortButton = css`
  width: auto;
  margin-top: 2rem;
  button {
    width: 8rem;
    font-weight: bold;
    border: 1px solid #947a7a;
    border-radius: 6px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`
