import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Join from '../pages/Join'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Splash from '../pages/Splash'
import BookAutoRegister from '../pages/mylog/BookAutoRegister'
import BookRegister from '../pages/mylog/BookRegister'

import LoginCheck from '../components/LoginCheck'
import TokenCheck from '../components/TokenCheck'
import ReadingLogChart from '../pages/ReadingLogChart'
import Account from '../pages/account/Account'
import AccountProfile from '../pages/account/AccountProfile'
import EditPassword from '../pages/account/EditPassword'
import FindPassword from '../pages/account/FindPassword'
import LikeFeed from '../pages/account/LikeFeed'
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
        <Route path="/" element={<Splash />} /> {/**스플래시 */}
        <Route element={<LoginCheck />}>
          <Route path="/login" element={<Login />} /> {/**로그인 */}
          <Route path="/join" element={<Join />} /> {/**회원가입 */}
          <Route path="/find-pw" element={<FindPassword />} /> {/**비밀번호 찾기 */}
        </Route>
        <Route element={<TokenCheck />}>
          {/* 리딩 로그 메뉴 페이지 */}
          <Route path="/readinglog" element={<ReadingLog />} />
          <Route path="/readinglog/detail" element={<ReadingLogDetail />} />
          <Route path="/readinglog/search" element={<SearchResult />} />
          {/* 나의 로그 */}
          <Route path="/mylog" element={<MyLog />} />
          <Route path="/mylog/:detail" element={<MyLogDetail />} />
          <Route path="/mylog/search" element={<MyLogSearch />} />
          <Route path="/mylog/book_register" element={<BookRegister />} />
          <Route path="/mylog/book_auto_register" element={<BookAutoRegister />} />
          {/* 로그 분석*/}
          <Route path="/log-analysis" element={<ReadingLogChart />} />
          {/* 설정 */}
          <Route path="/account" element={<Account />} /> {/**계정 메뉴 페이지 */}
          <Route path="/account/profile" element={<AccountProfile />} />
          <Route path="/account/likes" element={<LikeFeed />} />
          <Route path="/account/change-pw" element={<EditPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
