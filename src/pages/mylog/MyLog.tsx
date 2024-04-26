import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetMyBookList } from '../../apis/myLogApi'
import { AllLayout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import MyBook from '../../components/mylog/MyBook'
import { RecordBtn } from '../../elements/Buttons'
import { LoadingSpinner } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'
import { calcRem, flexCenter } from '../../styles/theme'

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
      <AllLayout>
        {isLoading ? (
          <div css={spinContainer}>
            <LoadingSpinner />
          </div>
        ) : result?.length > 0 ? (
          <div css={myLogContainer}>
            <div className="mylogList">
              <SearchBar placeHolder="나의로그 검색하기" setSearchKeyWord={setSearchKeyWord} />
              <MyBook myBooks={result} scrollRef={ref} isLoading={isFetchingNextPage} />
            </div>
          </div>
        ) : (
          <EmptyMylog />
        )}
      </AllLayout>
      <RecordBtn text="기록하기" path="/mylog/search" />
    </>
  )
}
export default MyLog

const myLogContainer = css`
  ${flexCenter};
  .mylogList {
    margin-top: ${calcRem(50)};
    display: grid;
    justify-items: center;
    gap: ${calcRem(15)};
    grid-template-columns: 1fr 1fr;
  }
`
const spinContainer = css`
  ${flexCenter};
  height: 100vh;
`
