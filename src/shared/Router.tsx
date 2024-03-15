import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ReadingLog from '../pages/Readinglog'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readinglog" element={<ReadingLog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
