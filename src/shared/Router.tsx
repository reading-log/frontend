import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Join from '../pages/Join'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Splash from '../pages/Splash'
import BookAutoRegister from '../pages/mylog/BookAutoRegister'
import BookRegister from '../pages/mylog/BookRegister'
import BookSearchPage from '../pages/mylog/BookSearchPage'
import BookSearchResult from '../pages/mylog/BookSearchResult'
import MyLog from '../pages/mylog/MyLog'
import MyLogDetail from '../pages/mylog/MyLogDetail'
import MyLogSearchResult from '../pages/mylog/MyLogSearchResult'
import ReadingLogDetail from '../pages/readinglog/ReadingLogDetail'
import SearchResult from '../pages/readinglog/SearchResult'
import ReadingLog from '../pages/readinglog/ReadingLog'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/**404 페이지 */}
        <Route path="*" element={<NotFound />} />
        {/**splash 화면 */}
        <Route path="/" element={<Splash />} />
        {/**로그인 */}
        <Route path="/login" element={<Login />} />
        {/**회원가입 */}
        <Route path="/join" element={<Join />} />
        {/* 리딩 로그 메뉴 페이지 */}
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/readinglog/detail" element={<ReadingLogDetail />} />
        <Route path="/readinglog/search" element={<SearchResult />} />
        {/* 나의 로그 메뉴 페이지 */}
        <Route path="/mylog" element={<MyLog />} />
        <Route path="/mylog/detail" element={<MyLogDetail />} />
        <Route path="/mylog/search" element={<MyLogSearchResult />} />
        <Route path="/mylog/books" element={<BookSearchPage />} />
        <Route path="/mylog/books/search" element={<BookSearchResult />} />
        <Route path="/mylog/book_register" element={<BookRegister />} />
        <Route path="/mylog/book_auto_register" element={<BookAutoRegister />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
