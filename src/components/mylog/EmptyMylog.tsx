import { css } from '@emotion/react'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, flexCenter } from '../../styles/theme'

const EmptyMylog = () => {
  return (
    <div css={container}>
      <FontAwesomeIcon icon={faBoxOpen} size="6x" color={colors.main1} />
      <div className="emptyText">
        <p>기록된 책이 없습니다.</p>
        <p>기록하기를 눌러 책을 기록해보세요!</p>
      </div>
    </div>
  )
}

export default EmptyMylog

const container = css`
  height: calc(100vh - 11rem);
  ${flexCenter}
  flex-direction: column;

  button {
    font-weight: 700;
    color: ${colors.main1};
  }

  .emptyText {
    margin-top: 2rem;
    line-height: 1.5;
    text-align: center;
  }
`
