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
      <div css={container}>
        <div css={containerHeaderBox}>{children}</div>
      </div>
    </>
  )
}

/** footer만 있는 레이아웃 */
export const FooterLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div css={container}>
        <div css={containerBox}>{children}</div>
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
      <div css={container}>
        <div css={containerHeaderBox}>{children}</div>
      </div>
      <Footer />
    </>
  )
}

const container = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 4rem);
`

const containerHeaderBox = css`
  padding: 1rem;
  margin-top: 4rem;
`

const containerBox = css`
  padding: 1rem;
`

/**스플래쉬 박스 */
const containerDefault = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
