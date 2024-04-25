import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Join from '../pages/Join'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Splash from '../pages/Splash'
import BookAutoRegister from '../pages/mylog/BookAutoRegister'
import BookRegister from '../pages/mylog/BookRegister'

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
        <Route element={<TokenCheck />}>
          <Route path="*" element={<NotFound />} /> {/**404 페이지 */}
          <Route path="/" element={<Splash />} /> {/**splash 화면 */}
          <Route path="/login" element={<Login />} /> {/**로그인 */}
          <Route path="/join" element={<Join />} /> {/**회원가입 */}
          {/* 리딩 로그 메뉴 페이지 */}
          <Route path="/readinglog" element={<ReadingLog />} />
          <Route path="/readinglog/detail" element={<ReadingLogDetail />} />
          <Route path="/readinglog/search" element={<SearchResult />} />
          {/* 나의 로그 */}
          <Route path="/mylog" element={<MyLog />} />
          <Route path="/mylog/:detail" element={<MyLogDetail />} /> {/* 나의 로그 상세 */}
          <Route path="/mylog/search" element={<MyLogSearch />} /> {/* 나의 로그 기록하기 : 책 검색 */}
          <Route path="/mylog/book_register" element={<BookRegister />} /> {/* 나의 로그 기록하기 : 직접등록 */}
          <Route path="/mylog/book_auto_register" element={<BookAutoRegister />} /> {/* 나의 로그 기록하기 : 자동등록 */}
          {/* 로그 분석*/}
          <Route path="/log-analysis" element={<ReadingLogChart />} />
          {/* 설정 */}
          <Route path="/account" element={<Account />} />
          <Route path="/account/profile" element={<AccountProfile />} /> {/* 프로필 수정 */}
          <Route path="/account/likes" element={<LikeFeed />} /> {/* 좋아요한 피드보기 */}
          <Route path="/account/find-pw" element={<FindPassword />} /> {/* 비밀번호 찾기*/}
          <Route path="/account/change-pw" element={<EditPassword />} /> {/* 비밀번호 변경 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
