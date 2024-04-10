import { css } from '@emotion/react'
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const EmptySearch = () => {
  return (
    <div css={searchContainer}>
      <FontAwesomeIcon icon={faFaceSadTear} size="6x" color={colors.main1} />
      <p className="emptyText">검색 결과가 없습니다.</p>
    </div>
  )
}

export default EmptySearch

const searchContainer = css`
  ${flexCenter}
  flex-direction: column;
  margin-top: ${calcRem(50)};

  position: absolute;
  inset: 0;

  .emptyText {
    margin-top: 2rem;
    text-align: center;
  }
`
