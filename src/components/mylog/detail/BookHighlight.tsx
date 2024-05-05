import { css } from '@emotion/react'
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { usePostBookHighlight } from '../../../apis/myLogApi'
import { body2, colors, flexCenter } from '../../../styles/theme'
import { IBookHighlight } from '../../../types/book'

const BookHighlight = ({ bookHighlightData, bookId }: IBookHighlight) => {
  /**하이라이트 컨텐츠 수정 여부 */
  const [isEdit, setIsEdit] = useState({
    edit: false,
    content: '',
    page: 0,
  })

  /**수정 버튼 클릭 */
  const handleEditClick = () => {
    setIsEdit({
      edit: true,
      content: '',
      page: 0,
    })
  }

  /**수정 취소 버튼 클릭 */
  const handleEditCancel = () => {
    setIsEdit({
      edit: false,
      content: '',
      page: 0,
    })
  }

  /**content 담기 */
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsEdit(prev => ({
      ...prev,
      content: e.target.value,
    }))
  }

  /**페이지 버튼 담기 */
  const handlePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEdit(prev => ({
      ...prev,
      page: Number(e.target.value),
    }))
  }

  const postBookHighlightMutation = usePostBookHighlight()
  /**하이라이트 등록 */
  const handleAddHighlight = () => {
    if (!isEdit.content || !isEdit.page) return alert('하이라이트와 페이지를 입력해주세요.')
    postBookHighlightMutation.mutate(
      {
        bookId,
        content: isEdit.content,
        page: isEdit.page,
      },
      {
        onSuccess: () => {
          setIsEdit({
            edit: false,
            content: '',
            page: 0,
          })
        },
      },
    )
  }

  return (
    <div css={highlightBox}>
      {bookHighlightData?.map((highlight, index) => (
        <div className="contentBox" key={index}>
          {highlight?.content}
          <div className="footBox">
            <p className="page">p.{highlight?.page}</p>
            <div className="iconBox">
              <FontAwesomeIcon icon={faPen} color={colors.main1} />
              <FontAwesomeIcon icon={faTrashCan} color={colors.main1} />
            </div>
          </div>
        </div>
      ))}
      <div>
        {isEdit.edit ? (
          <div className="contentBox write">
            <textarea placeholder="하이라이트를 입력해주세요." maxLength={300} onChange={handleContent} />
            <div className="page_write">
              p.
              <input type="number" onChange={handlePage} />
            </div>
            <div className="btnBox">
              <button onClick={handleEditCancel} className="cancel_btn">
                취소
              </button>
              <button className="save_btn" onClick={handleAddHighlight}>
                저장
              </button>
            </div>
          </div>
        ) : (
          <div className="non_write" onClick={handleEditClick}>
            +
          </div>
        )}
      </div>
    </div>
  )
}

export default BookHighlight

const highlightBox = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .contentBox {
    ${body2};
    padding: 1rem 0.5rem;
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
    line-height: 1.2rem;
    white-space: pre-line;
  }

  .footBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .iconBox {
    display: flex;
    gap: 0.5rem;
  }

  .page {
    font-size: 0.8rem;
  }

  .non_write {
    ${flexCenter};
    padding: 0.5rem;
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
    font-size: 1.2rem;
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

  .page_write {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.5rem;

    input {
      width: 2.5rem;
      height: 1.5rem;
      border: none;
      font-size: 0.8rem;
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
`
