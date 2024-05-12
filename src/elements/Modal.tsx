/**북 캘린더 모달 */

import { css } from '@emotion/react'
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { body2, body3, ellipsis } from '../styles/theme'
import { TModal } from '../types/stats'

const Modal = ({ onClose, modalOpen }: { onClose: () => void; modalOpen: TModal }) => {
  const navigate = useNavigate()
  return (
    <div css={modalOverlay}>
      <div className="modalContainer">
        <div className="header">
          <p>{`${modalOpen.date.split('-')[1]}월 ${modalOpen.date.split('-')[2]}일`}</p>
          <FontAwesomeIcon icon={faClose} size="lg" onClick={onClose} />
        </div>
        <div className="booklist">
          {modalOpen.data.length === 0 ? (
            <p>기록된 책이 없습니다.</p>
          ) : (
            modalOpen.data.map((book, idx) => (
              <div className="bookFlex" key={idx}>
                <div className="book">
                  <FontAwesomeIcon icon={faPlay} size="1x" />
                  <p>{book.title}</p>
                </div>
                <button onClick={() => navigate(`/mylog/${book.bookId}`)}>이동</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 */
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContainer {
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }

  .header {
    p {
      font-size: 1rem;
      font-weight: 700;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .booklist {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ${body2};
  }

  .bookFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      ${body3};
      cursor: pointer;
    }
  }

  .book {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    p {
      width: 10rem;
      font-weight: 500;
      ${ellipsis};
    }
  }
`
