import { useQuery } from 'react-query'
import { axiosBookSearchResult } from '../apis/myLogApi'

export const useBookSearchQuery = (keyword: string) => {
  return useQuery(
    ['search', keyword],
    async () => {
      try {
        const data = await axiosBookSearchResult(keyword)
        // 대소문자 필터링
        const filteredBooks = data.filter((bookList: { title: string }) => bookList.title.toLowerCase().includes(keyword.toLowerCase()))
        return filteredBooks
      } catch (err) {
        console.error('Error fetching search results:', err)
        throw err
      }
    },
    {
      enabled: !!keyword, // 항상 true 값으로 고정
    },
  )
}
