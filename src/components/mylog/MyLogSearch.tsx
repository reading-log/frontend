import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import magnifier from '../../assets/images/돋보기.png'

type SearchProp = {
  placeholder: string
}

const MyLogSearch: React.FC<SearchProp> = ({ placeholder }) => {
  const navigate = useNavigate()
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate(`/mylog/search?q=${searchKeyWord}`) // 나의로그 로그 목록 결과 페이지로 이동
    },
    [navigate, searchKeyWord],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
      <form css={search} onSubmit={handleSubmit}>
        <div css={searchContainer}>
          <input type="text" value={searchKeyWord} onChange={handleChange} placeholder={placeholder} />
          <button>
            <img src={magnifier} alt="Search" />
          </button>
        </div>
      </form>
    </>
  )
}

export default MyLogSearch

const search = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-bottom: 25px;
  z-index: 10;
`

const searchContainer = css`
  display: flex;
  align-items: center;
  width: 19rem;
  position: fixed;
  input {
    background: transparent;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 2px solid #836565;
    position: absolute;
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-left: auto;
    z-index: 10;
  }
`
