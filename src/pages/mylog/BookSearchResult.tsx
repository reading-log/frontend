import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import BookList from '../../components/mylog/BookList'
import BookSearch from '../../components/mylog/BookSearch'
import { Book } from '../../types/book'

import BookImg from '../../assets/images/book.png'
import { useBookSearchQuery } from '../../hooks/useBookSearchQuery'
import { flexCenter } from '../../styles/theme'

const BookSearchResult = () => {
  const location = useLocation()
  const { searchKeyWord } = location.state

  const [bookList, setBookList] = useState<Book[]>([])
  const [searchParams] = useSearchParams(searchKeyWord)
  const keyword = searchParams.get('q') || ''
  const searchResult = useBookSearchQuery(keyword).data

  useEffect(() => {
    setBookList(searchResult)
  }, [searchResult])

  return (
    <>
      <AllLayout>
        <div css={feedContainer}>
          <BookSearch placeholder={keyword} />

          {BookList === undefined || bookList === null || bookList.length === 0 ? (
            <>
              {/* 키워드 검색 시 해당 책 목록이 없을 경우 */}
              <h1
                css={css`
                  margin-top: 3rem;
                `}
              >
                책 검색 결과가 없습니다.
              </h1>
              <img src={BookImg} css={image} />
              <div>
                <Link to="/mylog/book_register">️✍️ 직접 기록하기 ✍</Link>
              </div>
            </>
          ) : (
            <>
              {/* 키워드 검색 시 해당 책 목록이 있을 경우 */}
              <BookList bookList={bookList} />
            </>
          )}
        </div>
      </AllLayout>
    </>
  )
}

export default BookSearchResult

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
  color: gray;
  text-align: center;
  font-weight: bold;
  a {
    color: #836565;
    font-weight: bold;
  }
`

const image = css`
  display: block;
  width: 200px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
