import { css } from '@emotion/react'
import { colors } from '../styles/theme'

export const LoadingIndicator = () => {
  return (
    <div css={container}>
      <div css={circle} />
    </div>
  )
}

const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
const circle = css`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid ${colors.main1};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
