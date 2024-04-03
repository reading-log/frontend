import { useSearchParams } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import EmptySearch from '../../components/mylog/EmptySearch'
import SearchBar from '../../elements/SearchBar'
import { useMyLogSearchQuery } from '../../hooks/useMyLogSearchQuery'

const MyLogSearch = () => {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const searchResult = useMyLogSearchQuery(keyword).data

  return (
    <AllLayout>
      <SearchBar placeHolder="책 검색하기" />
      {true ? <EmptySearch /> : <div></div>}
    </AllLayout>
  )
}

export default MyLogSearch
