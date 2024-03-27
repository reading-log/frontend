import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Login from '../pages/Login'
import MyLog from '../pages/MyLog'
import Splash from '../pages/Splash'
import ReadingLog from '../pages/readinglog/ReadingLog'
import SearchResult from '../pages/readinglog/SearchResult'

import categories from '../components/Sample/CategorySample'
import Join from '../pages/Join'
import NotFound from '../pages/NotFound'
import ReadingLogDetail from '../pages/readinglog/ReadingLogDetail'

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
        {categories.map(category => (
          <Route key={category} path={category === '전체' ? `/readinglog/allType` : `/readinglog/${category}`} element={<ReadingLog selectedCategory={category} />} />
        ))}
        <Route path="/readinglog/detail" element={<ReadingLogDetail />}></Route>
        {categories.map(category => (
          <Route key={category} path={category === '전체' ? `/readinglog/allType/search` : `/readinglog/${category}/search`} element={<SearchResult selectedCategory={category} />} />
        ))}
        <Route path="/mylog" element={<MyLog />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
