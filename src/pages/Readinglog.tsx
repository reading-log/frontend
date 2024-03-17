import { css } from '@emotion/react'
import { AllLayout } from '../components/Layouts'
import users from '../components/Sample/FeedSample'
import Category from '../components/readinglog/Category'
import Feed from '../components/readinglog/Feed'
import Search from '../components/readinglog/Search'
import { flexCenter } from '../styles/common'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

const ReadingLog = () => {
  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder="책 제목으로 검색하기" />
        <Category />
        {users.map((user, id) => (
          <span key={id}>
            <Feed user={user} />
          </span>
        ))}
      </div>
    </AllLayout>
  )
}

export default ReadingLog

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
`
