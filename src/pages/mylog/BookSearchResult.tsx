import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import BookList from '../../components/mylog/BookList'
import BookSearch from '../../components/mylog/BookSearch'

import BookImg from '../../assets/images/book.png'
import { useBookSearchQuery } from '../../hooks/useBookSearchQuery'
import { flexCenter } from '../../styles/theme'

const BookSearchResult = () => {
  const location = useLocation()
  const { searchKeyWord } = location.state

  const [searchParams] = useSearchParams(searchKeyWord)
  const keyword = searchParams.get('q') || ''
  const { data, isLoading } = useBookSearchQuery(keyword)

  return (
    <>
      <AllLayout>
        <div css={feedContainer}>
          <BookSearch placeholder={keyword} />
          {isLoading ? (
            <div
              css={css`
                margin-top: 3rem;
              `}
            >
              로딩 중
            </div>
          ) : (
            <>
              {data?.length > 0 ? (
                <>
                  {/* 키워드 검색 시 해당 책 목록이 있을 경우 */}
                  <BookList bookList={data} />
                </>
              ) : (
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
                </>
              )}
            </>
          )}
          <Link to="/mylog/book_register" css={registerLink}>
            ️✍️ 직접 기록하기 ✍
          </Link>
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
    margin-bottom: 10rem;
    position: fixed;
  }
`

const image = css`
  display: block;
  width: 200px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const registerLink = css`
  color: #836565;
  font-weight: bold;
  position: fixed;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
`
