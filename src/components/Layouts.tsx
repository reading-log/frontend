import { css } from '@emotion/react'
import Footer from '../elements/Footer'
import Topbar from '../elements/Topbar'

interface ILayoutProps {
  /**children */
  children: React.ReactNode
}

/**default 레이아웃 */
export const DefaultLayout = ({ children }: ILayoutProps) => {
  return <div css={containerDefault}>{children}</div>
}

/** 헤더만 있는 레이아웃 */
export const HeaderLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Topbar />
      <div css={header}>
        <div className="container">{children}</div>
      </div>
    </>
  )
}

/** footer만 있는 레이아웃 */
export const FooterLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div css={footer}>
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  )
}

/** header 와 footer 있는 레이아웃 */
export const AllLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Topbar />
      <div css={Allcontainer}>
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  )
}

/**header */
const header = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;

  .container {
    margin-top: 4rem;
    padding: 1rem;
  }
`

/**footer */
const footer = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);

  .container {
    padding: 1rem;
  }
`

/**header +  footer */
const Allcontainer = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);

  .container {
    padding: 1rem;
    margin-top: 4rem;
  }
`

const containerDefault = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
