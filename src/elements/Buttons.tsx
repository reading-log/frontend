import { css } from '@emotion/react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { body1, calcRem, colors, flexCenter } from '../styles/theme'

export const RecordBtn = ({ path, text }: { text: string; path: string }) => {
  const navigate = useNavigate()

  /**기록하기로 이동 */
  const handleClick = () => {
    //스크롤 최상단으로 이동
    navigate(path) //  나의로그 책 검색하기
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
    margin-top: ${calcRem(10)};
    margin-right: ${calcRem(10)};
  }

  .btn {
    ${flexCenter};
    width: ${calcRem(47)};
    height: ${calcRem(47)};
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
    border-radius: 50%;
  }
`
