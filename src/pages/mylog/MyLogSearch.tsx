import { useState } from 'react'
import { AllLayout } from '../../components/Layouts'
import { RecordBtn } from '../../elements/Buttons'
import SearchBar from '../../elements/SearchBar'

const MyLogSearch = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  //TODO: 검색결과 가져오기
  // const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } = useSearchBookInfiniteScroll(searchKeyWord)

  // const { ref, inView } = useInView()

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage()
  //   }
  // }, [inView, hasNextPage, fetchNextPage])

  return (
    <>
      <AllLayout>
        <SearchBar placeHolder="책 검색하기" setSearchKeyWord={setSearchKeyWord} />
        {/* {false ? <EmptySearch /> : <SearchBookList bookList={[]} scrollRef={ref} />} */}
      </AllLayout>
      <RecordBtn text="직접 기록하기" path="/mylog/book_register" />
    </>
  )
}

export default MyLogSearch
