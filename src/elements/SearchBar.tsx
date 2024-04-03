import { css } from '@emotion/react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { calcRem, flexCenter } from '../styles/theme'

interface ISearchBarProps {
  /**검색어 placeholder */
  placeHolder: string
}

/**검색바 */
const SearchBar = ({ placeHolder }: ISearchBarProps) => {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <div css={search}>
      <div css={searchContainer}>
        <input type="text" placeholder={placeHolder} onChange={handleChange} />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="#836565" />
        </button>
      </div>
    </div>
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
  border: 1px solid #836565;

  input {
    font-weight: 500;
    width: 100%;
    background: transparent;
    padding: ${calcRem(5)} ${calcRem(10)};
    border: none;
  }
`
