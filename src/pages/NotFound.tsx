import { css } from '@emotion/react'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DefaultLayout } from '../components/Layouts'
import { calcRem, colors } from '../styles/theme'

const NotFound = () => {
  return (
    <DefaultLayout>
      <div css={notFound}>
        <FontAwesomeIcon icon={faTriangleExclamation} size="8x" color={colors.main1} />
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
    </DefaultLayout>
  )
}

export default NotFound

const notFound = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: ${calcRem(27)};
  }
`
