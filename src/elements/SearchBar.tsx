import { css } from '@emotion/react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { colors, flexCenter } from '../styles/theme'

interface ISearchBarProps {
  /**검색어 */
  searchKeyWord: string
  /**검색어 placeholder */
  placeHolder: string
  /**검색어를 저장*/
  setSearchKeyWord: (keyword: string) => void
  /**스크롤 최상단으로 이동 */
  onScrollTop?: () => void
}

interface IKeyWordValues {
  keyword: string
}

/**검색바 */
const SearchBar = ({ placeHolder, setSearchKeyWord, searchKeyWord }: ISearchBarProps) => {
  const { register, handleSubmit } = useForm<IKeyWordValues>()

  /**검색어 저장 */
  const submitKeyword = (data: IKeyWordValues) => {
    setSearchKeyWord(data.keyword)
  }

  return (
    <form css={searchContainer} onSubmit={handleSubmit(submitKeyword)}>
      <div className="searchBox">
        <input type="text" placeholder={placeHolder} {...register('keyword')} defaultValue={searchKeyWord} />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color={colors.main1} />
        </button>
      </div>
    </form>
  )
}

export default SearchBar

const searchContainer = css`
  width: 100%;
  ${flexCenter}
  flex-direction: row;
  margin: 0.5rem 0;
  z-index: 10;

  .searchBox {
    border: 2px solid ${colors.main1};

    input {
      padding: 0.2rem 0.4rem;
      border: none;
    }
  }
`
