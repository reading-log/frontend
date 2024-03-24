import { useQuery } from 'react-query'
// import axios from 'axios'
import myLogSamples from '../components/Sample/MyLogSample'
import { axiosSearchResult } from '../apis/myLogSearchApi'

export const useMyLogSearchQuery = (keyword: string) => {
  //   return useQuery('search', async () => {
  //     try {
  //       // axiosSearchResults 함수를 호출하여 검색 결과를 가져옴
  //       const data = await axiosSearchResult(keyword)
  //       return data.filter(bookList => bookList.title.toLowerCase().includes(keyword))
  //     } catch (err) {
  //       console.error('Error fetching search results:', err)
  //       throw err
  //     }
  //   })
  return useQuery('search', () => {
    console.log('myLogSamples', myLogSamples)
    const filteredList = myLogSamples.filter(myLogSample => myLogSample.title.toLowerCase().includes(keyword))
    console.log('filteredList', filteredList)
    return filteredList
  })
}
