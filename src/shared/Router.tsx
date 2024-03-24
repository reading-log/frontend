import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Login from '../pages/Login'
import ReadingLog from '../pages/readinglog/ReadingLog'
import SearchResult from '../pages/readinglog/SearchResult'
import MyLog from '../pages/mylog/MyLog'
import Splash from '../pages/Splash'
import ReadingLogDetail from '../pages/readinglog/ReadingLogDetail'
import BookRegister from '../pages/mylog/BookRegister'
import BookAutoRegister from '../pages/mylog/BookAutoRegister'
import Record from '../pages/mylog/Record'
import BookSearchResult from '../pages/mylog/BookSearchResult'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        {/* 리딩로그 메뉴 페이지 */}
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/readinglog/detail" element={<ReadingLogDetail />}></Route>
        <Route path="/readinglog/search" element={<SearchResult />} />
        {/* 나의 로그 메뉴 페이지 */}
        <Route path="/mylog" element={<MyLog />} />
        <Route path="/mylog/record" element={<Record />} />
        <Route path="/mylog/search" element={<BookSearchResult />} />
        <Route path="/mylog/book_register" element={<BookRegister />} />
        <Route path="/mylog/book_auto_register" element={<BookAutoRegister />} />

        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
