import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetMyBookList } from '../../apis/myLogApi'
import { Layout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import MyBook from '../../components/mylog/MyBook'
import RecordBtn from '../../components/mylog/RecordBtn'
import { LoadingIndicator } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'

const MyLog = () => {
  /**검색어 키워드 */
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, result } = useGetMyBookList(searchKeyWord)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <Layout isFooter isHeader>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            {result?.length > 0 ? (
              <div css={myLogContainer}>
                <SearchBar placeHolder="나의로그 검색하기" setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} />
                <div className="bookList">
                  <MyBook myBooks={result} scrollRef={ref} isLoading={isFetchingNextPage} />
                </div>
              </div>
            ) : (
              <EmptyMylog />
            )}
          </>
        )}
      </Layout>
      <RecordBtn text="기록하기" path="/mylog/search" />
    </>
  )
}
export default MyLog

const myLogContainer = css`
  margin-top: 2.4rem;
  padding: 1rem;

  .bookList {
    height: calc(100vh - 12rem);
    overflow: auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`
