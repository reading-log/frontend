import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/images/뒤로가기버튼.png'

const Topbar = () => {
  const navigate = useNavigate()

  /**이전으로 이동*/
  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div css={topbar}>
      <button onClick={handleClick} css={backBtn}>
        <img src={back} alt="Back" />
      </button>
      <h1 css={title}>ReadingLog</h1>
    </div>
  )
}

export default Topbar

const topbar = css`
  width: 100%;
  max-width: 26rem;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff;
`
const title = css`
  font-family: 'Josefin Slab', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  color: #836565;
`

const backBtn = css`
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-left: 2rem;
`
