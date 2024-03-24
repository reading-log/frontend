import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import magnifier from '../../assets/images/돋보기.png'
import { axiosSearchResults } from '../../utils/bookSearchUtil'

type SearchProp = {
  placeholder: string
}

const BookSearch: React.FC<SearchProp> = ({ placeholder }) => {
  const navigate = useNavigate()
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      navigate(`/mylog/search?q=${searchKeyWord}`) // 나의로그 책 목록 결과 페이지로 이동
      //   try {
      //     const data = await axiosSearchResults(searchKeyWord)
      //     console.log(data) // 받아온 데이터 확인
      //     navigate(`/mylog/search?q=${searchKeyWord}`) // 나의로그 책 목록 결과 페이지로 이동
      //   } catch (error) {
      //     console.error('Error fetching search results:', error)
      //   }
    },
    [navigate, searchKeyWord],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(e.target.value)
  }

  return (
    <>
      <form css={search} onSubmit={handleSubmit}>
        <input type="text" value={searchKeyWord} onChange={handleChange} placeholder={placeholder} />
        <button>
          <img src={magnifier} alt="Search" />
        </button>
      </form>
    </>
  )
}

export default BookSearch

const search = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19rem;
  height: 30px;
  margin: auto;
  margin-bottom: 25px;
  position: fixed;
  top: 5rem;
  z-index: 10;
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
    z-index: 1;
  }
`
