import { Global } from '@emotion/react'
import Router from './shared/Router'

/**스타일 관련 */
import './styles/font.css'
import { globalStyles } from './styles/globalStyles'

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router />
    </>
  )
}

export default App
