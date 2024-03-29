import { useState } from 'react'
import Snowman from '../../assets/images/SnowmanBtn.png'
import { css } from '@emotion/react'
import { ButtonType } from '../../types/button'

const SnowmanButton: React.FC<ButtonType> = ({ setChangeOneLine, setChangeHighlight, setChangeReview }) => {
  // 모바일 환경에서도 버튼 클릭하면 옵션 2가지가 바로 보이도록 함.
  const [isSelectVisible, setIsSelectVisible] = useState(false)

  const handleChangeClick = () => {
    // 수정&삭제 버튼(보이기 or 숨기기)
    setIsSelectVisible(prev => !prev)

    if (setChangeOneLine) {
      setChangeOneLine(true) // 한 줄 평 수정하기
    } else if (setChangeHighlight) {
      setChangeHighlight(true) // 하이라이트 수정하기
    } else if (setChangeReview) {
      setChangeReview(true) // 서평 수정하기
    }
  }

  const handleDeleteClick = () => {
    // 수정&삭제 버튼(보이기 or 숨기기)
    setIsSelectVisible(prev => !prev)
    console.log('삭제')
  }

  const summaryId = 1234 // 임시

  return (
    <div css={snowmanBtn}>
      <button onClick={() => setIsSelectVisible(prev => !prev)}>
        <img src={Snowman} alt="menu" />
      </button>

      {isSelectVisible && (
        <div css={selectContainer}>
          <button onClick={handleChangeClick}>수정</button>

          <form onSubmit={e => e.preventDefault()}>
            {/* <form method="DELETE" action={`/api/summaries/${summaryId}`}> */}
            <button onClick={handleDeleteClick}>삭제</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default SnowmanButton

const snowmanBtn = css`
  font-size: 14px;
  float: right;
  position: relative;
  select {
    padding: 0.5rem;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
  }
`

const selectContainer = css`
  background-color: white;
  width: 4rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  top: 100%;
  right: 0;
  position: absolute;
  z-index: 10;

  button {
    width: 100%;
    padding: 0.5rem;
    &:hover {
      background-color: #f0f0f0;
    }
  }
`
