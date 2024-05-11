import { css } from '@emotion/react'
import { useEditBookReview, usePostBookReview } from '../../../apis/myLogApi'
import { body2, colors } from '../../../styles/theme'
import { IBookReview } from '../../../types/book'

const BookReview = ({ isReviewEdit, setIsReviewEdit, bookReviewData, bookId }: IBookReview) => {
  /**서평 담기 */
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsReviewEdit(prev => ({
      ...prev,
      content: e.target.value,
    }))
  }

  /**서평 수정 취소 */
  const handleEditCancel = () => {
    setIsReviewEdit({
      toggle: false,
      edit: false,
      content: '',
    })
  }

  const postBookReviewMutation = usePostBookReview()

  /**서평 등록 */
  const handleAddReview = () => {
    if (!isReviewEdit.content) return alert('서평을 입력해주세요.')
    postBookReviewMutation.mutate(
      {
        bookId,
        content: isReviewEdit.content,
      },
      {
        onSuccess: () => {
          setIsReviewEdit(prev => ({
            ...prev,
            edit: !prev.edit,
            content: '',
          }))
        },
      },
    )
  }

  const editBookReviewMutation = useEditBookReview()
  /**서평 수정 */
  const handleEditReview = () => {
    if (!isReviewEdit.content) return alert('서평을 수정해주세요.')
    editBookReviewMutation.mutate(
      {
        reviewId: bookReviewData?.[0]?.id,
        content: isReviewEdit.content,
      },
      {
        onSuccess: () => {
          setIsReviewEdit(prev => ({
            ...prev,
            edit: !prev.edit,
            content: '',
          }))
        },
      },
    )
  }

  return (
    <div css={reviewBox}>
      {isReviewEdit.edit ? (
        <div className="write">
          <textarea placeholder="서평을 입력해주세요." defaultValue={bookReviewData?.[0]?.content} maxLength={300} onChange={handleContent} />
          <div className="btnBox">
            <button onClick={handleEditCancel} className="cancel_btn">
              취소
            </button>
            {bookReviewData?.[0]?.content ? (
              <button onClick={handleEditReview} className="save_btn">
                수정
              </button>
            ) : (
              <button onClick={handleAddReview} className="save_btn">
                저장
              </button>
            )}
          </div>
        </div>
      ) : (
        <>{bookReviewData?.[0]?.content ? <p>{bookReviewData?.[0]?.content}</p> : <p className="example_text">{bookId ? '책을 읽고 서평을 기록해주세요.' : '등록된 서평이 없습니다.'}</p>}</>
      )}
    </div>
  )
}

export default BookReview

const reviewBox = css`
  ${body2};
  padding: 1rem 0.5rem;
  border: 2px solid ${colors.innerBoxStroke};
  border-radius: 0.5rem;
  line-height: 1.2rem;
  white-space: pre-line;

  .page {
    font-size: 0.8rem;
  }

  .write {
    textarea {
      ${body2};
      width: 100%;
      height: 10rem;
      padding: 0.5rem;
      border: none;
      background-color: ${colors.edit_innerboxFill};
    }
  }

  .btnBox {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    button {
      width: 100%;
      margin-left: 0.5rem;
      border-radius: 0.3rem;
      ${body2};
    }

    .cancel_btn {
      border: 2px solid ${colors.button2};
    }

    .save_btn {
      background-color: ${colors.button2};
      border: 2px solid ${colors.button1};
    }
  }

  .example_text {
    color: ${colors.gray};
  }
`
