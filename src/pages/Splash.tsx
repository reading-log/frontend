import { css } from '@emotion/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { title1 } from '../styles/common'

const Splash = () => {
  const navigate = useNavigate()

  /** 리딩로그로 리다이렉트*/
  useEffect(() => {
    setTimeout(() => {
      navigate('/readinglog')
    }, 2000)
  }, [navigate])

  return (
    <div css={splashBox}>
      <h1 css={title1}>ReadingLog</h1>
    </div>
  )
}

export default Splash

/**스플래쉬 박스 */
const splashBox = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
