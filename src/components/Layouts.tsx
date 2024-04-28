import { css } from '@emotion/react'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
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
    <div css={isFooter || isHeader ? layoutContainer : layoutCenter}>
      {isHeader && <Header isBack={isBack} />}
      {children}
      {isFooter && <Footer />}
    </div>
  )
}

/**정가운데 레이아웃 정렬 */
const layoutCenter = css`
  width: 100%;
  height: 100vh;
  ${flexCenter};
  flex-direction: column;
`

/**레이아웃 컨테이너 */
const layoutContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
