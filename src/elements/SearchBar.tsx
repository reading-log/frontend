import { css } from '@emotion/react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { calcRem, colors, flexCenter } from '../styles/theme'

interface ISearchBarProps {
  /**검색어 placeholder */
  placeHolder: string
  /**검색어를 저장*/
  setSearchKeyWord: (keyword: string) => void
}

interface IFormValues {
  keyword: string
}

/**검색바 */
const SearchBar = ({ placeHolder, setSearchKeyWord }: ISearchBarProps) => {
  const { register, handleSubmit } = useForm<IFormValues>()
  /**검색어 저장 */
  const submitKeyword = (data: IFormValues) => {
    setSearchKeyWord(data.keyword)
  }

  return (
    <form css={search} onSubmit={handleSubmit(submitKeyword)}>
      <div css={searchContainer}>
        <input
          type="text"
          placeholder={placeHolder}
          {...register('keyword', {
            required: true,
          })}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color={colors.main1} />
        </button>
      </div>
    </form>
  )
}

export default SearchBar

const search = css`
  margin-top: 4rem;
  width: 100%;
  max-width: 26rem;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 0;
  background-color: #ffffff;
  ${flexCenter}
  flex-direction: row;
  height: ${calcRem(50)};
  z-index: 10;
`

const searchContainer = css`
  display: flex;
  align-items: center;
  width: ${calcRem(253)};
  height: ${calcRem(32)};
  border: 1px solid ${colors.main1};
  input {
    font-weight: 500;
    width: 100%;
    background: transparent;
    padding: ${calcRem(5)} ${calcRem(10)};
    border: none;
  }
`
