import { css } from '@emotion/react'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, flexCenter } from '../../styles/theme'

/**기록된 책이 없음 */
const EmptyMylog = ({ isLike }: { isLike?: boolean }) => {
  return (
    <div css={container}>
      <FontAwesomeIcon icon={faBoxOpen} size="6x" color={colors.main1} />
      {isLike ? (
        <div className="emptyText">
          <p>좋아요한 로그가 없습니다.</p>
        </div>
      ) : (
        <div className="emptyText">
          <p>기록된 책이 없습니다.</p>
          <p>기록하기를 눌러 책을 기록해보세요!</p>
        </div>
      )}
    </div>
  )
}

export default EmptyMylog

const container = css`
  height: 100%;
  ${flexCenter}
  flex-direction: column;

  .emptyText {
    margin-top: 2rem;
    line-height: 1.5;
    text-align: center;
  }
`
