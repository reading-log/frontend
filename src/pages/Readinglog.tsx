import { AllLayout } from '../components/Layouts'
import users from '../components/Sample/FeedSample'
import Category from '../components/readinglog/Category'
import Feed from '../components/readinglog/Feed'
import Search from '../components/readinglog/Search'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

const ReadingLog = () => {
  return (
    <AllLayout>
      <Search placeholder="책 제목으로 검색하기" />
      <Category />
      {users.map((user, id) => (
        <span key={id}>
          <Feed user={user} />
        </span>
      ))}

      <br />
    </AllLayout>
  )
}

export default ReadingLog
