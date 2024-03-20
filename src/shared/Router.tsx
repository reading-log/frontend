import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Login from '../pages/Login'
import ReadingLog from '../pages/readinglog/ReadingLog'
import SearchResult from '../pages/readinglog/SearchResult'
import MyLog from '../pages/MyLog'
import Splash from '../pages/Splash'

import categories from '../components/Sample/CategorySample'
import ReadingLogDetail from '../pages/readinglog/ReadingLogDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
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
