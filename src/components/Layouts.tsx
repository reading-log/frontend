import { css } from '@emotion/react'
import Footer from '../elements/Footer'
import Topbar from '../elements/Topbar'

interface ILayoutProps {
  /**children */
  children: React.ReactNode
}

/** 헤더만 있는 레이아웃 */
export const HeaderLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Topbar />
      <div css={[containerHeaderBox, container]}>{children}</div>
      {/* <div css={container}>
        <div css={containerHeaderBox}>{children}</div>
      </div> */}
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
  background-color: #aaaaaa;
`

const containerHeaderBox = css`
  padding: 1rem;
  margin-top: 4rem;
`

const containerBox = css`
  padding: 1rem;
`
