import { css } from '@emotion/react'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout } from '../components/Layouts'
import { colors, flexCenter } from '../styles/theme'

interface IErrorFallBackProps {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallBack = ({ error, resetErrorBoundary }: IErrorFallBackProps) => {
  //eslint-disable-next-line
  console.log('error', error)

  /**홈으로 이동 */
  const handleGotoHome = () => {
    window.location.href = '/'
  }

  return (
    <Layout>
      <div css={notFound}>
        <FontAwesomeIcon icon={faCircleExclamation} size="8x" color={colors.main1} />
        <p>에러가 발생했습니다.</p>
        <div className="btnBox">
          <button onClick={resetErrorBoundary}>다시 시도</button>
          <button onClick={handleGotoHome}>홈으로 이동</button>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorFallBack

export const notFound = css`
  ${flexCenter}
  flex-direction: column;

  .btnBox {
    display: flex;
    gap: 0.4rem;

    button {
      cursor: pointer;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
    }
  }
`
