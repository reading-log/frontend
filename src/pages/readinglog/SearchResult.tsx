import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import { flexCenter } from '../../styles/common'
import Search from '../../components/readinglog/Search'
import { useSearchParams } from 'react-router-dom'
import { useSearchQuery } from '../../hooks/useSearchQuery'
import { useEffect, useState } from 'react'
import { CategoryProps, FeedType } from '../../types/feed'
import Filtering from '../../components/readinglog/Filtering'

import SearchResultCategory from '../../components/readinglog/SearchResultCategory'

const SearchResults: React.FC<CategoryProps> = ({ selectedCategory }) => {
  const [logs, setLogs] = useState<FeedType[]>([])
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const { data: searchResults } = useSearchQuery(keyword)

  useEffect(() => {
    if (searchResults) {
      setLogs(searchResults)
    }
  }, [searchResults])

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = selectedCategory === '전체' ? logs : logs.filter(feed => selectedCategory === feed.category)

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder={keyword} />
        <SearchResultCategory />
        <Filtering />

        {feedByCategory.map((log, id) => (
          <span key={id}>
            <Feed user={log} />
          </span>
        ))}
      </div>
    </AllLayout>
  )
}

export default SearchResults

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
`
