import Search from '../components/Search'
import Topbar from '../components/Topbar'
import Category from '../components/Category'

const ReadingLog = () => {
  return (
    <div>
      <Topbar />
      <Search placeholder="책 제목으로 검색하기" />
      <Category />
    </div>
  )
}

export default ReadingLog
