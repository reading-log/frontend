import { useQuery } from 'react-query'
// import axios from 'axios'
// import { axiosMyLogSearchResult } from '../apis/myLogApi'

import myLogSamples from '../components/Sample/MyLogSample'

export const useMyLogSearchQuery = (keyword: string) => {
  // return useQuery(
  //   ['search', keyword],
  //   async () => {
  //     try {
  //       // axiosSearchResults 함수를 호출하여 검색 결과를 가져옴
  //       const data = await axiosMyLogSearchResult(keyword)
  //       return data.filter(bookList => bookList.title.toLowerCase().includes(keyword))
  //     } catch (err) {
  //       console.error('Error fetching search results:', err)
  //       throw err
  //     }
  //   },
  //   {
  //     enabled: !!keyword, // 항상 true 값으로 고정
  //   },
  // )
  return useQuery(
    ['search', keyword],
    () => {
      const filteredList = myLogSamples.filter(myLogSample => myLogSample.title.toLowerCase().includes(keyword))
      console.log('filteredList', filteredList)
      return filteredList
    },
    {
      enabled: !!keyword, // 항상 true 값으로 고정
    },
  )
}
