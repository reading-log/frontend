import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import Filtering from '../../components/readinglog/Filtering'
import Search from '../../components/readinglog/Search'
import { useSearchQuery } from '../../hooks/useSearchQuery'

import { flexCenter } from '../../styles/theme'
import { FeedType } from '../../types/feed'

const SearchResult = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [categoryId, setCategoryId] = useState(0)
  const [filterName, setFilterName] = useState('latest')

  const [logs, setLogs] = useState<FeedType[]>([])
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const searchResult = useSearchQuery(keyword).data

  useEffect(() => {
    setLogs(searchResult)
  }, [searchResult])

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = selectedCategory === '전체' ? logs : logs.filter(feed => selectedCategory === feed.category)

  console.log('feedByCategory', feedByCategory)
  console.log('searchResult', searchResult)

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder={keyword} />

        <Filtering setCategoryId={setCategoryId} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filterName={filterName} setFilterName={setFilterName} />
        <span
          css={
            feedByCategory.length === 0 || feedByCategory === null || feedByCategory === undefined
              ? show
              : css`
                  display: none;
                `
          }
        >
          검색 결과가 없습니다.
        </span>
        {feedByCategory.map((feed, id) => (
          <span key={id}>
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

const show = css`
  display: inline;
  margin-top: 1rem;
`
