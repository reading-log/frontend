import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchBookInfiniteScroll } from '../../apis/myLogApi'
import { Layout } from '../../components/Layouts'
import EmptySearch from '../../components/mylog/EmptySearch'
import RecordBtn from '../../components/mylog/RecordBtn'
import SearchBookList from '../../components/mylog/SearchBookList'
import { LoadingIndicator } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'
import { useSearchParam } from '../../hooks/useSearchParam'
import { getSearchParam } from '../../utils/getSearchParam'

const MyLogSearch = () => {
  const [searchKeyWord, setSearchKeyWord] = useState(getSearchParam() || '')
  const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, result, isDataLoading } = useSearchBookInfiniteScroll(searchKeyWord)

  useSearchParam(searchKeyWord)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  const scroll = useRef<HTMLDivElement>(null)

  return (
    <>
      <Layout isBack isFooter isHeader>
        {isLoading || isDataLoading ? (
          <LoadingIndicator />
        ) : (
          <div css={myLogSearchContainer}>
            <SearchBar placeHolder="책 검색하기" setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} />
            {result?.length > 0 ? (
              <div className="bookList">
                <SearchBookList bookList={result} scrollRef={ref} isLoading={isFetchingNextPage} scroll={scroll} />
              </div>
            ) : (
              <EmptySearch searchKeyWord={searchKeyWord} />
            )}
          </div>
        )}
      </Layout>
      <RecordBtn text="직접 기록하기" path="/mylog/post-mylog" />
    </>
  )
}

export default MyLogSearch

const myLogSearchContainer = css`
  height: calc(100vh - 8rem);
  margin-top: 2.5rem;
  padding: 1rem;

  .bookList {
    height: calc(100vh - 11rem);
    overflow: auto;
  }
`
