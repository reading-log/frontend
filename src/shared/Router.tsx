import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import Login from '../pages/Login'
import ReadingLog from '../pages/Readinglog'
import Splash from '../pages/Splash'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/readinglog" element={<ReadingLog />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
