import { useQuery } from 'react-query'
// import myLogSamples from '../components/Sample/MyLogSample'
import { axiosSearchResult } from '../apis/bookSearchApi'

export const useBookSearchQuery = (keyword: string) => {
  return useQuery('search', async () => {
    try {
      // axiosSearchResults 함수를 호출하여 검색 결과를 가져옴
      const data = await axiosSearchResult(keyword)

      if (!data) {
        // 데이터가 없는 경우 빈 배열 반환
        return []
      }

      const filteredBooks = data.filter((bookList: { title: string }) => bookList.title.toLowerCase().includes(keyword.toLowerCase()))
      return filteredBooks
    } catch (err) {
      console.error('Error fetching search results:', err)
      throw err
    }
  })
  // return useQuery('search', () => {
  //   console.log('myLogSamples', myLogSamples)
  //   const filteredList = myLogSamples.filter(myLogSample => myLogSample.title.toLowerCase().includes(keyword))
  //   console.log('filteredList', filteredList)
  //   return filteredList
  // })
}
