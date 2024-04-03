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
import MyLogSearch from '../pages/mylog/MyLogSearch'
import ReadingLog from '../pages/readinglog/ReadingLog'
import ReadingLogDetail from '../pages/readinglog/ReadingLogDetail'
import SearchResult from '../pages/readinglog/SearchResult'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} /> {/**404 페이지 */}
        <Route path="/" element={<Splash />} /> {/**splash 화면 */}
        <Route path="/login" element={<Login />} /> {/**로그인 */}
        <Route path="/join" element={<Join />} /> {/**회원가입 */}
        {/* 리딩 로그 메뉴 페이지 */}
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/readinglog/detail" element={<ReadingLogDetail />} />
        <Route path="/readinglog/search" element={<SearchResult />} />
        <Route path="/mylog" element={<MyLog />} /> {/* 나의 로그 */}
        <Route path="/mylog/search" element={<MyLogSearch />} /> {/* 나의 로그 검색 */}
        <Route path="/mylog/detail" element={<MyLogDetail />} />
        <Route path="/mylog/books" element={<BookSearchPage />} />
        <Route path="/mylog/books/search" element={<BookSearchResult />} />
        <Route path="/mylog/book_register" element={<BookRegister />} /> {/* 나의 로그 직접등록 */}
        <Route path="/mylog/book_auto_register" element={<BookAutoRegister />} /> {/* 나의 로그 자동등록 */}
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
