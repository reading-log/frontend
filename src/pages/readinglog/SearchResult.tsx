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
  const { data, isLoading } = useSearchQuery(keyword) // 리딩로그 검색 훅

  useEffect(() => {
    setLogs(data)
  }, [data])

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = selectedCategory === '전체' ? logs : logs.filter(feed => selectedCategory === feed.category)

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder={keyword} />
        {isLoading ? (
          <div
            css={css`
              margin-top: 3rem;
            `}
          >
            로딩 중
          </div>
        ) : (
          <>
            <Filtering setCategoryId={setCategoryId} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filterName={filterName} setFilterName={setFilterName} />
            {feedByCategory?.length > 0 ? (
              <>
                {/* 키워드 검색 시 해당 로그 목록이 있을 경우 */}
                {feedByCategory.map((feed, id) => (
                  <span key={id}>
                    <Feed feed={feed} />
                  </span>
                ))}
              </>
            ) : (
              <>
                {/* 키워드 검색 시 해당 로그 목록이 없을 경우 */}
                <span
                  css={css`
                    margin-top: 1rem;
                  `}
                >
                  검색 결과가 없습니다.
                </span>
              </>
            )}
          </>
        )}
      </div>
    </AllLayout>
  )
}

export default SearchResult

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
`
