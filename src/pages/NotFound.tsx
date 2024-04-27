import { css } from '@emotion/react'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { DefaultLayout } from '../components/Layouts'
import { calcRem, colors, flexCenter } from '../styles/theme'

const NotFound = () => {
  return (
    <DefaultLayout>
      <div css={notFound}>
        <FontAwesomeIcon icon={faTriangleExclamation} size="8x" color={colors.main1} />
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </DefaultLayout>
  )
}

export default NotFound

const notFound = css`
  ${flexCenter}
  flex-direction: column;
  p {
    margin-top: ${calcRem(27)};
  }
  a {
    margin-top: ${calcRem(20)};
    color: ${colors.main1};
  }
`
