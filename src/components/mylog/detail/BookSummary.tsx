import { css } from '@emotion/react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useState } from 'react'
import { useDeleteBookReview } from '../../../apis/myLogApi'
import { body2, colors } from '../../../styles/theme'
import { IBookSummary } from '../../../types/book'
import BookHighlight from './BookHighlight'
import BookReview from './BookReview'

const BookSummary = ({ bookHighlightData, bookReviewData, bookId }: IBookSummary) => {
  /**하이라이트, 서평 선택 */
  const [clickMenu, setClickMenu] = useState('highlight')

  /**서평 수정 버튼 */
  const [isReviewEdit, setIsReviewEdit] = useState({
    toggle: false,
    edit: false,
    content: '',
  })

  const handleMenuClick = useCallback((menu: string) => {
    setClickMenu(menu)
    setIsReviewEdit({
      toggle: false,
      edit: false,
      content: '',
    })
  }, [])

  /**토글 열기 */
  const handleToggle = useCallback(() => {
    setIsReviewEdit(prev => ({
      ...prev,
      toggle: !prev.toggle,
    }))
  }, [])

  /**토글 수정으로 변경 */
  const handleEditToggle = useCallback(() => {
    setIsReviewEdit(prev => ({
      ...prev,
      edit: !prev.edit,
      toggle: false,
    }))
  }, [])

  const deleteBookReviewMutation = useDeleteBookReview()
  /**서평 삭제 */
  const handleDeleteReview = () => {
    if (!bookReviewData[0]?.id) {
      setIsReviewEdit(prev => ({
        ...prev,
        toggle: false,
      }))
      alert('삭제할 서평이 없습니다.')
    } else {
      if (window.confirm('서평을 삭제하시겠습니까?')) {
        deleteBookReviewMutation.mutate(bookReviewData[0]?.id, {
          onSuccess: () => {
            setIsReviewEdit(prev => ({
              ...prev,
              toggle: false,
            }))
          },
        })
      }
    }
  }

  return (
    <div css={bookHighlight}>
      <div className="header">
        <div className="menu">
          <p onClick={() => handleMenuClick('highlight')} className={clickMenu === 'highlight' ? 'bold' : 'non_bold'}>
            하이라이트
          </p>
          |
          <p onClick={() => handleMenuClick('summary')} className={clickMenu === 'summary' ? 'bold' : 'non_bold'}>
            서평
          </p>
        </div>
        {clickMenu === 'summary' && <FontAwesomeIcon icon={faEllipsisVertical} color={colors.gray} onClick={handleToggle} />}
        {isReviewEdit.toggle && (
          <div css={toggle}>
            <button onClick={handleEditToggle}>{bookReviewData?.[0]?.content ? '수정' : '작성'}</button>
            <button onClick={handleDeleteReview}>삭제</button>
          </div>
        )}
      </div>
      {clickMenu === 'highlight' ? (
        <BookHighlight bookHighlightData={bookHighlightData} bookId={bookId} />
      ) : (
        <BookReview bookId={bookId} bookReviewData={bookReviewData} isReviewEdit={isReviewEdit} setIsReviewEdit={setIsReviewEdit} />
      )}
    </div>
  )
}

export default BookSummary

const bookHighlight = css`
  padding: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    position: relative;

    .menu {
      display: flex;
      gap: 0.5rem;
    }

    .bold {
      font-weight: 600;
    }

    .non_bold {
      color: ${colors.gray};
      font-weight: 400;
    }
  }
`
const toggle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 1rem;
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
