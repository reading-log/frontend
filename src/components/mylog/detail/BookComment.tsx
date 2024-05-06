import { css } from '@emotion/react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDeleteBookComment, useEditBookComment, usePostBookComment } from '../../../apis/myLogApi'
import { body2, colors } from '../../../styles/theme'
import { IBookComment } from '../../../types/book'

/**상세 책 한줄평 조회 */
const BookComment = ({ bookCommentData, bookId }: IBookComment) => {
  /**수정삭제 다이얼 */
  const [isCommentEdit, setIsCommentEdit] = useState({
    isEdit: false,
    isToggle: false,
    content: '',
  })

  /**토글 열기 */
  const handleToggle = () => {
    setIsCommentEdit(prev => ({
      ...prev,
      isToggle: !prev.isToggle,
    }))
  }

  /**토글 수정으로 변경 */
  const handleEditToggle = () => {
    setIsCommentEdit(prev => ({
      ...prev,
      isEdit: !prev.isEdit,
      isToggle: false,
    }))
  }

  /**한줄평 수정 취소 */
  const handleEditCancel = () => {
    setIsCommentEdit(prev => ({
      ...prev,
      isEdit: !prev.isEdit,
      content: '',
    }))
  }

  /**한줄평 입력 */
  const handleEditChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsCommentEdit(prev => ({
      ...prev,
      content: e.target.value,
    }))
  }

  const postCommentMutation = usePostBookComment()
  /**한줄평 등록 */
  const handleSaveComment = () => {
    if (!isCommentEdit.content) return alert('한줄평을 입력해주세요.')
    postCommentMutation.mutate(
      { bookId, content: isCommentEdit.content },
      {
        onSuccess: () => {
          setIsCommentEdit(prev => ({
            ...prev,
            isEdit: !prev.isEdit,
            content: '',
          }))
        },
      },
    )
  }

  const editCommentMutation = useEditBookComment()
  /**한줄평 수정 */
  const handleEditComment = () => {
    if (!isCommentEdit.content) return alert('한줄평을 입력해주세요.')
    editCommentMutation.mutate(
      { summaryId: bookCommentData[0]?.id, content: isCommentEdit.content },
      {
        onSuccess: () => {
          setIsCommentEdit(prev => ({
            ...prev,
            isEdit: !prev.isEdit,
            content: '',
          }))
        },
      },
    )
  }

  const deleteCommentMutation = useDeleteBookComment()
  /**한줄평 삭제 */
  const handleDeleteComment = () => {
    deleteCommentMutation.mutate(bookCommentData[0]?.id, {
      onSuccess: () => {
        setIsCommentEdit(prev => ({
          ...prev,
          isEdit: false,
          isToggle: false,
        }))
      },
    })
  }

  return (
    <div css={bookCommentBox}>
      <div className="header">
        <p className="title">한줄평</p>
        <FontAwesomeIcon icon={faEllipsisVertical} color={colors.gray} onClick={handleToggle} />
      </div>
      {isCommentEdit.isToggle && (
        <div css={toggle}>
          <button onClick={handleEditToggle}>{bookCommentData[0] ? '수정' : '작성'}</button>
          <button onClick={handleDeleteComment}>삭제</button>
        </div>
      )}
      {isCommentEdit.isEdit ? (
        <div className="comment">
          <textarea placeholder="한줄평을 입력해주세요." defaultValue={bookCommentData[0]?.content || ''} maxLength={50} onChange={handleEditChange} />
          <div className="btnBox">
            <button onClick={handleEditCancel} className="cancel_btn">
              취소
            </button>
            {bookCommentData[0]?.content ? (
              <button onClick={handleEditComment} className="save_btn">
                수정
              </button>
            ) : (
              <button onClick={handleSaveComment} className="save_btn">
                저장
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="comment">{bookCommentData?.[0]?.content ? <p>{bookCommentData[0]?.content}</p> : <p className="example_text">책을 읽고 느낀 점을 기록해보세요.</p>}</div>
      )}
    </div>
  )
}

export default BookComment

const bookCommentBox = css`
  padding: 1rem;
  position: relative;

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
      ${body2};
      width: 100%;
      height: 3.5rem;
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

const toggle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1rem;
  top: 2rem;
  background-color: #ffffff;
  border: 2px solid ${colors.boxStroke};
  border-radius: 0.5rem;
  z-index: 1;

  button {
    width: 4rem;
    padding: 0.2rem;
    ${body2};
  }

  button + button {
    border-top: 2px solid ${colors.boxStroke};
  }
`
