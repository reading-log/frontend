import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import { flexCenter } from '../../styles/common'
import Search from '../../components/readinglog/Search'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSearchQuery } from '../../hooks/useSearchQuery'
import { useEffect, useState } from 'react'
import { FeedType } from '../../types/feed'
import Filtering from '../../components/readinglog/Filtering'

import categories from '../../components/Sample/CategorySample'

const SearchResult = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const handleClick = (category: string) => {
    setSelectedCategory(category)
  }
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
      .active {
        font-weight: 800;
      }
    }
  }
`
