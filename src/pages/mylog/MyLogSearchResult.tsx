import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import { flexCenter } from '../../styles/common'
import BookList from '../../components/mylog/BookList'
import BookSearch from '../../components/mylog/BookSearch'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FeedType } from '../../types/feed'

import BookImg from '../../assets/images/book.png'
import { useMyLogSearchQuery } from '../../hooks/useMyLogSearchQuery'

const MyLogSearchResult = () => {
  const [bookList, setBookList] = useState<FeedType[]>([])
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const searchResult = useMyLogSearchQuery(keyword).data

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
              {/* <img src={BookImg} css={image} /> */}
              <Link
                to="/mylog/book"
                css={css`
                  margin-top: 3rem;
                `}
              >
                ️✍️ 책 등록하기 ✍
              </Link>
            </>
          )}
        </div>
      </AllLayout>
    </>
  )
}

export default MyLogSearchResult

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
