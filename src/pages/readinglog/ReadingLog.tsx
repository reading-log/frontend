import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { AllLayout } from '../../components/Layouts'
import Feed from '../../components/readinglog/Feed'
import Filtering from '../../components/readinglog/Filtering'
import Search from '../../components/readinglog/Search'
import { useFeedInfiniteScroll } from '../../hooks/useFeedInfiniteScroll'
import { flexCenter } from '../../styles/theme'

const ReadingLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [categoryId, setCategoryId] = useState(0)
  const [filterName, setFilterName] = useState('createdAt')

  const containerRef = useRef(null)

  // useFeedInfiniteScroll 훅을 사용하여 피드 데이터 가져오기
  const { getFeed, fetchNextPage, isSuccess, hasNextPage } = useFeedInfiniteScroll(selectedCategory, categoryId, filterName)

  // 카테고리에 따라 필터링된 피드 데이터 가져오기
  const feedByCategory = isSuccess ? getFeed?.pages.flatMap(page => page.feeds) : []

  // Intersection Observer 콜백 함수
  const handleObserver = (entities: any[]) => {
    const target = entities[0]
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage()
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [containerRef, hasNextPage])

  return (
    <AllLayout>
      <div css={feedContainer}>
        <Search placeholder="책 제목으로 검색하기" />
        <Filtering setCategoryId={setCategoryId} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} filterName={filterName} setFilterName={setFilterName} />

        {feedByCategory?.map((feed, id) => (
          <span key={id}>
            <Feed feed={feed} />
          </span>
        ))}

        {/* Intersection Observer가 연결된 버튼 컨테이너 */}
        <div ref={containerRef}></div>
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
