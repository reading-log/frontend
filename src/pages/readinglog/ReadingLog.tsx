import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import Category from '../../components/readinglog/Category'
import Feed from '../../components/readinglog/Feed'
import Search from '../../components/readinglog/Search'
import { flexCenter } from '../../styles/common'
import Filtering from '../../components/readinglog/Filtering'
import { CategoryProps } from '../../types/feed'

import extendedFeedSamples from '../../components/Sample/FeedSample'

const ReadingLog: React.FC<CategoryProps> = ({ selectedCategory }) => {
  const allLogs = extendedFeedSamples
  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = selectedCategory === '전체' ? allLogs : allLogs.filter(feed => selectedCategory === feed.category)

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder="책 제목으로 검색하기" />
        <Category />
        <Filtering />

        {feedByCategory.map((feed, id) => (
          <span key={id}>
            <Feed user={feed} />
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
