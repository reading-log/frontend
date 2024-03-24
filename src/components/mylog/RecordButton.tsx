import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

const RecordButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/mylog/book') //  나의로그 책 검색하기
  }
  return (
    <>
      <span css={recordBtn}>
        기록하기
        <button type="button" onClick={handleClick}>
          <span>✍️</span>
        </button>
      </span>
    </>
  )
}

export default RecordButton

const recordBtn = css`
  color: #836565;
  font-size: 16px;
  position: fixed;
  z-index: 10;
  button {
    background: #ddd5d5;
    width: 47px;
    height: 47px;
    border: 1px solid #836565;
    border-radius: 2rem;
    span {
      font-size: 30px;
      margin-left: -0.2rem;
    }
  }
`
