import { css } from '@emotion/react'
import { colors } from '../styles/theme'

export const LoadingIndicator = () => {
  return (
    <div css={container}>
      <div css={circle} />
    </div>
  )
}

export const LoadingSpinner = () => {
  return (
    <div css={spinContainer}>
      <div className="spin" />
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
  width: 2.5rem;
  height: 2.5rem;
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

const spinContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;

  .spin {
    &:after {
      content: ' ';
      display: block;
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
      border-radius: 50%;
      border: 4px solid ${colors.main1};
      border-color: ${colors.main1} transparent ${colors.main1} transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
