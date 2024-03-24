import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import { flexCenter } from '../../styles/common'
import BookList from '../../components/mylog/BookList'
import BookSearch from '../../components/mylog/BookSearch'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FeedType } from '../../types/feed'
import { useBookSearchQuery } from '../../hooks/useBookSearchQuery'

import BookImg from '../../assets/images/book.png'

const BookSearchResult = () => {
  const [bookList, setBookList] = useState<FeedType[]>([])
  const [searchParams] = useSearchParams()
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
          {bookList.length !== 0 ? (
            <BookList bookList={bookList} />
          ) : (
            <>
              <img src={BookImg} css={image} />
              <Link
                to="/mylog/book_register"
                css={css`
                  margin-top: 3rem;
                `}
              >
                ️✍️ 직접 기록하기 ✍
              </Link>
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
  a {
    color: #836565;
    font-weight: bold;
  }
`

const image = css`
  width: 200px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
