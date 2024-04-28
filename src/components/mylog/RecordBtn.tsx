import { css } from '@emotion/react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { body1, colors, flexCenter } from '../../styles/theme'

/**기록하기 버튼 */
const RecordBtn = ({ path, text }: { text: string; path: string }) => {
  const navigate = useNavigate()

  /**기록하기로 이동 */
  const handleClick = () => {
    navigate(path)
  }

  return (
    <div css={writeButton}>
      <span>{text}</span>
      <button className="btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faPencil} size="xl" color={colors.main1} />
      </button>
    </div>
  )
}

export default RecordBtn

const writeButton = css`
  position: fixed;
  bottom: 5.5rem;
  right: 1rem;

  @media (min-width: 450px) {
    position: absolute;
    bottom: 5.5rem;
    right: 1rem;
  }

  display: flex;
  align-items: center;

  span {
    ${body1};
    color: ${colors.main1};
    margin-top: 0.5rem;
    margin-right: 0.8rem;
  }

  .btn {
    ${flexCenter};
    width: 3rem;
    height: 3rem;
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
    border-radius: 50%;
  }
`
