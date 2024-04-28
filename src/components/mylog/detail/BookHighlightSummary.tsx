import { css } from '@emotion/react'
import { faEllipsisVertical, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useState } from 'react'
import { body2, colors, flexCenter } from '../../../styles/theme'

const BookHighlightSummary = () => {
  /**하이라이트, 서평 선택 */
  const [clickMenu, setClickMenu] = useState('highlight')

  const handleMenuClick = useCallback((menu: string) => {
    setClickMenu(menu)
  }, [])

  /**컨텐츠 수정 여부 */
  const [isEdit, setIsEdit] = useState(false)

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
        {clickMenu === 'summary' && <FontAwesomeIcon icon={faEllipsisVertical} color={colors.gray} />}
      </div>
      <div>
        {clickMenu === 'highlight' ? (
          <>
            <div className="contentBox">
              하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수
              있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할
              수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만
              기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자
              이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습니다. 하이라이트는 50자 이내로만 기입할 수 있습
              <div className="footBox">
                <p className="page">p.23</p>
                <FontAwesomeIcon icon={faTrashCan} color={colors.main1} />
              </div>
            </div>
            <div>
              {isEdit ? (
                <div className="contentBox write">
                  <textarea placeholder="하이라이트를 입력해주세요." maxLength={300} />
                  <div className="page_write">
                    p.
                    <input type="number" />
                  </div>
                  <div className="btnBox">
                    <button onClick={() => setIsEdit(false)} className="cancel_btn">
                      취소
                    </button>
                    <button className="save_btn">저장</button>
                  </div>
                </div>
              ) : (
                <div className="non_write" onClick={() => setIsEdit(true)}>
                  +
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="contentBox">
            {isEdit ? (
              <div className="write">
                <textarea placeholder="하이라이트를 입력해주세요." maxLength={300} />
                <div className="btnBox">
                  <button onClick={() => setIsEdit(false)} className="cancel_btn">
                    취소
                  </button>
                  <button className="save_btn">저장</button>
                </div>
              </div>
            ) : (
              'asdasdllk;sadlk;sadkl;sdal;ksdakl;sadkl;sadkl;sadkl;sadkl;'
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default BookHighlightSummary

const bookHighlight = css`
  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

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

  .contentBox {
    ${body2};
    padding: 1rem 0.5rem;
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
  }

  .footBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .page {
    font-size: 0.8rem;
  }

  .non_write {
    margin-top: 0.5rem;
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
