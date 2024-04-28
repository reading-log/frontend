import { Global, css } from '@emotion/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Router from './shared/Router'

/**스타일 관련 */
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './pages/ErrorFallBack'
import { globalStyles } from './styles/globalStyles'

const App = () => {
  /**토큰 설정 */
  const token = Cookies.get('accessToken')
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const [isLimitMobile, setIsLimitMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 360) {
      setIsLimitMobile(true)
    }
  }, [])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Global styles={globalStyles} />
      {isLimitMobile ? (
        <div css={limitMobile}>
          <p>저희 서비스는 360px 이상의 화면 해상도가 필요합니다.</p>
          <br />
          <p>작은 화면에서는 기능이 제한되오니</p>
          <p>PC 또는 태블릿 접속을 권장드립니다.</p>
          <br />
          <p>이용에 불편을 드려 죄송합니다.</p>
        </div>
      ) : (
        <Router />
      )}
    </ErrorBoundary>
  )
}

export default App

const limitMobile = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  text-align: center;
  font-size: 0.8rem;
  line-height: 1.2;
`
