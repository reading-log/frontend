import { css } from '@emotion/react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { colors, flexCenter, title3 } from '../styles/theme'

const Header = ({ isBack }: { isBack?: boolean }) => {
  const navigate = useNavigate()

  /**이전으로 이동*/
  const handleClick = () => {
    // 사이트 주소가 일치할 때만 뒤로가기
    if (window.location.host === 'localhost:5173') navigate(-1)
  }

  return (
    <div css={headerContainer}>
      {isBack && (
        <button onClick={handleClick} css={backBtn}>
          <FontAwesomeIcon icon={faChevronLeft} size="xl" color={colors.main1} />
        </button>
      )}
      <h1 css={title3}>Reading log</h1>
    </div>
  )
}

export default Header

const headerContainer = css`
  position: absolute;
  top: 0;

  width: 100%;
  height: 3.5rem;
  background: #ffff;
  ${flexCenter}
`

const backBtn = css`
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-left: 2rem;
`
