import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchBookInfiniteScroll } from '../../apis/myLogApi'
import { AllLayout } from '../../components/Layouts'
import EmptySearch from '../../components/mylog/EmptySearch'
import SearchBookList from '../../components/mylog/SearchBookList'
import { RecordBtn } from '../../elements/Buttons'
import { LoadingSpinner } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'
import { flexCenter } from '../../styles/theme'

const MyLogSearch = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, result } = useSearchBookInfiniteScroll(searchKeyWord)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  const scroll = useRef<HTMLDivElement>(null)

  /**스크롤바 최상단으로 올리기 */
  const onScrollTop = () => {
    scroll.current?.scrollIntoView()
  }

  return (
    <>
      <AllLayout>
        <SearchBar placeHolder="책 검색하기" setSearchKeyWord={setSearchKeyWord} onScrollTop={onScrollTop} />
        {isLoading ? (
          <div css={myLogContainer}>
            <LoadingSpinner />
          </div>
        ) : result.length > 0 ? (
          <SearchBookList bookList={result} scrollRef={ref} isLoading={isFetchingNextPage} scroll={scroll} />
        ) : (
          <EmptySearch searchKeyWord={searchKeyWord} />
        )}
      </AllLayout>
      <RecordBtn text="직접 기록하기" path="/mylog/book_register" />
    </>
  )
}

export default MyLogSearch

const myLogContainer = css`
  ${flexCenter};
  height: 100vh;
`
