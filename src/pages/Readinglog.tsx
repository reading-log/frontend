import Search from '../components/readinglog/Search'
import Topbar from '../components/Topbar'
import Category from '../components/readinglog/Category'
import Feed from '../components/readinglog/Feed'
import users from '../components/Sample/FeedSample'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

const ReadingLog = () => {
  return (
    <div>
      <Topbar />
      <Search placeholder="책 제목으로 검색하기" />
      <Category />

      {users.map((user, id) => (
        <span key={id}>
          <Feed user={user} />
        </span>
      ))}

      <br />
    </div>
  )
}

export default ReadingLog
