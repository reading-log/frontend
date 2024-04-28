import { css } from '@emotion/react'
import { faFaceSadTear } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, flexCenter } from '../../styles/theme'

const EmptySearch = ({ searchKeyWord }: { searchKeyWord: string }) => {
  return (
    <div css={searchContainer}>
      <FontAwesomeIcon icon={searchKeyWord ? faFaceSadTear : faMagnifyingGlass} size="6x" color={colors.main1} />
      <p className="emptyText">{searchKeyWord ? `검색 결과가 없습니다.` : `도서명을 입력해주세요.`}</p>
    </div>
  )
}

export default EmptySearch

const searchContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;

  .emptyText {
    margin-top: 2rem;
    text-align: center;
  }
`
