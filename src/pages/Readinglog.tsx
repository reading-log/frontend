import Search from '../components/Search'
import Topbar from '../components/Topbar'

const ReadingLog = () => {
  return (
    <div>
      <Topbar />
      <Search placeholder="책 제목으로 검색하기" />
    </div>
  )
}

export default ReadingLog
