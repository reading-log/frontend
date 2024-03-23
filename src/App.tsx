import { Global } from '@emotion/react'
import axios from 'axios'
import Router from './shared/Router'

/**스타일 관련 */
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './pages/ErrorFallBack'
import { globalStyles } from './styles/globalStyles'

const App = () => {
  /**토큰 설정 */
  const token = localStorage.getItem('accessToken')
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  axios.defaults.withCredentials = true

  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Global styles={globalStyles} />
      <Router />
    </ErrorBoundary>
  )
}

export default App
