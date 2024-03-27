import { useInfiniteQuery } from 'react-query'
// import axios from 'axios'

import extendedFeedSamples from '../components/Sample/FeedSample'

/* 피드 무한 스크롤 */
export const useFeedInfiniteScroll = (category: string, categoryId: number, filterName: string) => {
  const getFeedScroll = async ({ pageParam = 0 }) => {
    //   try {
    //     const pageSize = 10 // 한 페이지에 보여줄 항목 수
    //     const startIndex = pageParam * pageSize
    //     const endIndex = startIndex + pageSize

    //     const response = await axios.get(`api/feeds/${categoryId}/${filterName}?pageSize=${pageSize}&startIndex=${startIndex}&page=${pageParam}`)
    //     const { data } = response
    //     let allFeed = data.feeds

    //     const feedByCategory = categoryId === 0 ? allFeed.slice(startIndex, endIndex) : allFeed.filter(feed => category === feed.category).slice(startIndex, endIndex)

    //     return {
    //       feeds: feedByCategory,
    //       currentPage: pageParam, // 현재 페이지
    //     }
    //   } catch (error) {
    //     throw new Error('Failed to fetch feeds')
    //   }
    // }

    // 더미 데이터를 반환
    const pageSize = 10 // 한 페이지에 보여줄 항목 수
    const startIndex = pageParam * pageSize
    const endIndex = startIndex + pageSize

    let allFeed = extendedFeedSamples
    if (filterName === 'latest') {
      // 날짜가 가장 최신인 순서로 정렬
      allFeed = allFeed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (filterName === 'popular') {
      // like 개수가 가장 높은 것부터 정렬
      allFeed = allFeed.sort((a, b) => b.like - a.like)
    }

    const feedByCategory = categoryId === 0 ? allFeed.slice(startIndex, endIndex) : allFeed.filter(feed => category === feed.category).slice(startIndex, endIndex)

    return {
      feeds: feedByCategory,
      currentPage: pageParam, // 현재 페이지
    }
  }

  const {
    data: getFeed,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(['getFeedScroll', categoryId, filterName], getFeedScroll, {
    getNextPageParam: (lastPage, pages) => (lastPage.feeds[0] ? lastPage.currentPage + 1 : undefined),
    refetchOnWindowFocus: false,
    retry: false,
  })

  return { getFeed, fetchNextPage, isSuccess, hasNextPage, refetch }
}
