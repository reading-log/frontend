import { css } from '@emotion/react'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
import Topbar from '../elements/Topbar'
import { flexCenter } from '../styles/theme'

interface ILayoutProps {
  /**헤더 여부 */
  isHeader?: boolean
  /**뒤로가기 기능 필요 */
  isBack?: boolean
  /**푸터 여부 */
  isFooter?: boolean
  /**children */
  children: React.ReactNode
}

/**
 * 레이아웃
 *
 * @param children - 레이아웃에 포함될 컴포넌트.
 * @param isHeader - 헤더 여부
 * @param isFooter - 푸터 여부
 * @param isBack - 뒤로가기 버튼 여부
 * @param boardName - 게시판명
 */
export const Layout = ({ children, isHeader, isFooter, isBack }: ILayoutProps) => {
  return (
    <div css={layoutContainer}>
      {isHeader && <Header isBack={isBack} />}
      {children}
      {isFooter && <Footer />}
    </div>
  )
}

const layoutContainer = css`
  width: 100%;
  height: 100vh;
  background-color: #a4cef8;
  ${flexCenter}
  flex-direction: column;
`

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
  height: calc(100vh - 5rem);

  .container {
    padding: 1rem;
  }
`

/**header +  footer */
const Allcontainer = css`
  width: 100%;
  position: absolute;
  overflow: auto;
  height: calc(100vh - 5rem);

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
