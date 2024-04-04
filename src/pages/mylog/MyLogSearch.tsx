import { useState } from 'react'
import { useSearchBook } from '../../apis/myLogApi'
import { AllLayout } from '../../components/Layouts'
import EmptySearch from '../../components/mylog/EmptySearch'
import SearchBookList from '../../components/mylog/SearchBookList'
import SearchBar from '../../elements/SearchBar'

const MyLogSearch = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const { data: bookList } = useSearchBook(searchKeyWord)

  return (
    <AllLayout>
      <SearchBar placeHolder="책 검색하기" setSearchKeyWord={setSearchKeyWord} />
      {bookList?.length < 0 ? (
        <EmptySearch />
      ) : (
        <div>
          <SearchBookList bookList={bookList} />
        </div>
      )}
    </AllLayout>
  )
}

export default MyLogSearch
