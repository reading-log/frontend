import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import { flexCenter } from '../../styles/common'
import Search from '../../components/readinglog/Search'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSearchQuery } from '../../hooks/useSearchQuery'
import { useEffect, useState } from 'react'
import { CategoryProps, FeedType } from '../../types/feed'
import Filtering from '../../components/readinglog/Filtering'

import SearchResultCategory from '../../components/readinglog/SearchResultCategory'

const SearchResult: React.FC<CategoryProps> = ({ selectedCategory }) => {
  const [logs, setLogs] = useState<FeedType[]>([])
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const searchResult = useSearchQuery(keyword).data

  useEffect(() => {
    setLogs(searchResult)
  }, [searchResult])

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = selectedCategory === '전체' ? logs : logs.filter(feed => selectedCategory === feed.category)

  const navigate = useNavigate()
  const handleFeedClick = (feed: FeedType) => {
    navigate('/readinglog/detail', { state: { feed } })
  }

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder={keyword} />
        <SearchResultCategory />
        <Filtering />

        {feedByCategory.map((feed, id) => (
          <span key={id} onClick={() => handleFeedClick(feed)}>
            <Feed feed={feed} />
          </span>
        ))}
      </div>
    </AllLayout>
  )
}

export default SearchResult

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
`
