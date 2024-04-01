import { useState } from 'react'
import Snowman from '../../assets/images/SnowmanBtn.png'
import { css } from '@emotion/react'
import { ButtonType } from '../../types/button'

interface SnowmanBtn extends ButtonType {
  onClick?: () => void
}
const SnowmanButton: React.FC<SnowmanBtn> = ({ onClick, setChangeOneLine, setChangeHighlight, setChangeReview }) => {
  const [isSelectVisible, setIsSelectVisible] = useState(false)

  const handleToggle = () => {
    // 수정&삭제 버튼(보이기 or 숨기기)
    setIsSelectVisible(prev => !prev)
  }

  const handleChangeClick = () => {
    onClick && onClick() // 해당 요소만 수정

    if (setChangeOneLine) {
      setChangeOneLine(true) // 한 줄 평 수정하기
    } else if (setChangeHighlight) {
      setChangeHighlight(true) // 하이라이트 수정하기
    } else if (setChangeReview) {
      setChangeReview(true) // 서평 수정하기
    }
  }

  const handleDeleteClick = () => {
    onClick && onClick() // 해당 요소만 식제
    console.log('삭제')
  }

  return (
    <div css={snowmanBtn}>
      <button onClick={handleToggle}>
        <img src={Snowman} alt="menu" />
      </button>

      {isSelectVisible && (
        <div css={selectContainer}>
          <button onClick={handleChangeClick}>수정</button>

          <form onSubmit={e => e.preventDefault()}>
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
  margin-left: 0.5rem;
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
