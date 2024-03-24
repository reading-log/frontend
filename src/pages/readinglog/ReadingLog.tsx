import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import Search from '../../components/readinglog/Search'
import { flexCenter } from '../../styles/common'
import Filtering from '../../components/readinglog/Filtering'
import { useInfiniteQuery } from 'react-query'
import React, { useEffect, useState } from 'react'
import axiosFeed from '../../utils/feedUtil'

import categories from '../../components/Sample/CategorySample'
import extendedFeedSamples from '../../components/Sample/FeedSample'

const ReadingLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const handleClick = (category: string) => {
    setSelectedCategory(category)
  }

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const allLogs = extendedFeedSamples
  const feedByCategory = selectedCategory === '전체' ? allLogs : allLogs.filter(feed => selectedCategory === feed.category)
  console.log('feedByCategory', feedByCategory)

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder="책 제목으로 검색하기" />

        <div css={categoryBox}>
          <div>
            {categories.map(
              (category, id) =>
                id < 6 && (
                  <span
                    key={id}
                    onClick={() => handleClick(category)}
                    css={css`
                      font-weight: ${selectedCategory === category ? 'bold' : ''};
                    `}
                  >
                    {category}
                  </span>
                ),
            )}
          </div>
        </div>
        <Filtering />

        {feedByCategory.map((feed, id) => (
          <span key={id}>
            <Feed feed={feed} />
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
  height: 100%;
`

const categoryBox = css`
  display: flex;
  align-items: center;
  background-color: #f3f0f0;
  width: 80%;
  height: 33px;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 15px;
  div {
    padding: 0;
    margin: auto;
    span {
      margin-right: 10px;
      float: left;
    }
  }
`
