import { css } from '@emotion/react'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layouts'
import { body2, colors, flexCenter } from '../styles/theme'

const NotFound = () => {
  return (
    <Layout>
      <div css={notFound}>
        <FontAwesomeIcon icon={faTriangleExclamation} size="8x" color={colors.main1} />
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">홈으로 이동</Link>
      </div>
    </Layout>
  )
}

export default NotFound

const notFound = css`
  ${flexCenter}
  flex-direction: column;
  p {
    margin-top: 1.5rem;
  }
  a {
    ${body2}
    background-color: #e0e0e0;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
`
