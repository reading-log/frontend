import axios from 'axios'
import { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { IBook } from '../types/book'

/**북로그 목록 조회 */

export const useGetBooklog = (searchKeyword: string) => {
  const [result, setResult] = useState<IBook[]>([])

  const getMyBookList = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`/api/book-logs`, {
      params: {
        keyword: searchKeyword, //검색어
        page: pageParam, //현재 페이지 번호
        size: 10, //몇개를 가져올 건지
      },
    })
    return data
  }

  const { fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } = useInfiniteQuery(['BookLog', searchKeyword], getMyBookList, {
    getNextPageParam: lastPage => {
      const { data } = lastPage
      return data.last ? undefined : data?.pageable?.pageNumber + 1
    },
    onSuccess: res => {
      const flattenedData = res.pages.map(page => page.data.content).flat()
      setResult(flattenedData)
    },
  })

  return { fetchNextPage, isLoading, hasNextPage, isFetchingNextPage, result }
}
