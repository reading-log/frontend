import axios from 'axios'
import { useState } from 'react'
import { useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { TBookLog } from '../types/book'

/**북로그 목록 조회 */

export const useGetBooklog = (searchKeyword: string) => {
  const [result, setResult] = useState<TBookLog[]>([])

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

/**북로그 상세조회 */

export const useGetBookDetail = (bookId?: string, memberId?: string) => {
  return useQuery(
    ['BookDetail', bookId, memberId],
    async () => {
      const { data } = await axios.get(`/api/book-logs/${bookId}/${memberId}`)
      return data
    },
    {
      enabled: !!bookId && !!memberId,
    },
  )
}

/**북로그 좋아요 등록 */
export const usePostLike = () => {
  return useMutation(
    async (id: number | string) => {
      const response = await axios.post(`/api/summaries/likes/${id}`)
      return response
    },
    {
      onSuccess: () => {},
      onError: () => {
        alert('좋아요 등록에 실패했습니다.')
      },
    },
  )
}

/**북로그 좋아요 취소 */
export const useDeleteLike = () => {
  return useMutation(
    async (id: number | string) => {
      const response = await axios.delete(`/api/summaries/likes/${id}`)
      return response
    },
    {
      onSuccess: () => {},
      onError: () => {
        alert('좋아요 취소에 실패했습니다.')
      },
    },
  )
}
