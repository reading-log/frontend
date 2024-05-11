import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetBooklog } from '../../apis/readingLogApi'
import { Layout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import ReadingBook from '../../components/readingLog/ReadingBook'
import { LoadingIndicator } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'

const ReadinglogFeed = () => {
  /**검색어 키워드 */
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, result } = useGetBooklog(searchKeyWord)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <Layout isFooter isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          {result?.length ? (
            <div css={feedContainer}>
              <SearchBar placeHolder="도서명 검색하기" setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} />
              <div css={bookDetailContainer}>{result?.map(booklog => <ReadingBook key={booklog?.bookId} booklog={booklog} />)}</div>
            </div>
          ) : (
            <EmptyMylog />
          )}
        </>
      )}
    </Layout>
  )
}

export default ReadinglogFeed

const feedContainer = css`
  margin-top: 3.5rem;
`

const bookDetailContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 1rem 1.5rem;
  height: calc(100vh - 12rem);
  overflow-y: auto;
`
