import { useState } from 'react'
import Snowman from '../../assets/images/SnowmanBtn.png'
import { css } from '@emotion/react'

const SnowmanButton = () => {
  const [isSelectVisible, setIsSelectVisible] = useState(false)
  const handleButtonClick = () => {
    // 모바일 환경에서도 버튼 클릭하면 옵션 2가지가 바로 보이도록 함.
    setIsSelectVisible(prev => !prev)
  }
  return (
    <div css={snowmanBtn}>
      <button onClick={handleButtonClick}>
        <img src={Snowman} alt="menu" />
      </button>

      <form method="POST" action="">
        {isSelectVisible && (
          <div css={selectContainer}>
            <button onClick={() => console.log('수정')}>수정</button>
            <button onClick={() => console.log('삭제')}>삭제</button>
          </div>
        )}
      </form>
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
