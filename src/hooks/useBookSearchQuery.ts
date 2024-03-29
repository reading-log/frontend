import { useQuery } from 'react-query'
import axios from 'axios'

/* 나의로그 책 검색 */
export const useBookSearchQuery = (searchKeyword: string) => {
  return useQuery(
    ['MyLogBookSearch', searchKeyword],
    async () => {
      const response = await axios.get(`/api/books/search?q=${searchKeyword}`)
      const { data } = response.data
      return data.item
    },
    {
      enabled: !!searchKeyword, //검색어가 있을때만 실행
      onSuccess: data => {},
      onError: error => {
        console.error('Error fetching search results:', error)
        throw error
      },
    },
  )
}
