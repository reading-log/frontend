import axios from 'axios'
import { useState } from 'react'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IBook, IBookInput, ISearchBook } from '../types/book'

/**내가 등록한 책 목록 조회 */
export const useGetMyBookList = (searchKeyword: string) => {
  const [result, setResult] = useState<IBook[]>([])

  const getMyBookList = async ({ pageParam = 0 }) => {
    const { data } = await axios.get(`/api/books/me`, {
      params: {
        keyword: searchKeyword, //검색어
        page: pageParam, //현재 페이지 번호
        size: 10, //몇개를 가져올 건지
      },
    })
    return data
  }

  const { fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } = useInfiniteQuery(['MyBooks', searchKeyword], getMyBookList, {
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

/**기록용 책 검색(알라딘 api 조회) 무한 스크롤 */
export const useSearchBookInfiniteScroll = (searchKeyword: string) => {
  const [result, setResult] = useState<ISearchBook[]>([])
  const [isDataLoading, setIsDataLoading] = useState(true)

  // 검색어 내역 가져오기
  const getSearchBook = async ({ pageParam = 1 }) => {
    if (!searchKeyword) return { data: { startIndex: 0, itemsPerPage: 0, hasNext: false, item: [] } }
    const { data } = await axios.get(`/api/books/search?q=${searchKeyword}&start=${pageParam}`)
    return data
  }

  const { fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } = useInfiniteQuery(['MyLogBookSearch', searchKeyword], getSearchBook, {
    getNextPageParam: lastPage => {
      const { data } = lastPage
      return data.hasNext ? data.startIndex + 1 : undefined
    },
    onSuccess: res => {
      const flattenedData = res.pages.map(page => page.data.item).flat()
      setResult(flattenedData)
      setIsDataLoading(false)
    },
  })

  return { fetchNextPage, isLoading, isDataLoading, hasNextPage, isFetchingNextPage, result }
}

/**책 등록 */
export const useRegisterMyBook = () => {
  const navigate = useNavigate()
  return useMutation(
    async (data: FormData | IBookInput) => {
      const headers = {
        'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
      }

      const response = await axios.post(`/api/books`, data, {
        headers,
      })
      return response
    },
    {
      onSuccess: () => {
        alert('책이 등록되었습니다.')
        navigate('/mylog')
      },
      onError: () => {
        alert('책 등록에 실패했습니다.')
      },
    },
  )
}

/**등록한 책의 정보 조회 */
export const useGetBookInfo = (bookId?: string) => {
  return useQuery(
    ['BookInfo'],
    async () => {
      const { data } = await axios.get(`/api/books/${bookId}`)
      return data
    },
    {
      enabled: !!bookId,
    },
  )
}

/**등록한 책의 날짜 기록 조회 */
export const useGetBookRecordDate = (bookId?: string) => {
  return useQuery(
    ['BookRecordDate'],
    async () => {
      const { data } = await axios.get(`/api/records/${bookId}`)
      return data
    },
    {
      enabled: !!bookId,
    },
  )
}

/**등록한 책의 낧짜 기록 추가 */
export const usePostBookRecordDate = () => {
  const queryClient = useQueryClient()
  return useMutation(
    async (payload: { bookId?: string; data: { startDate: string; endDate: string } }) => {
      const response = await axios.post(`/api/records/${payload.bookId}`, payload.data)
      return response
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('BookRecordDate')
        alert('날짜가 등록되었습니다.')
      },
      onError: () => {
        alert('날짜 등록에 실패했습니다.')
      },
    },
  )
}
