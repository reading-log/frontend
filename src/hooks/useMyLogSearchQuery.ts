import { useQuery } from 'react-query'
// import axios from 'axios'

import myLogSamples from '../components/Sample/MyLogSample'

/* 나의로그 검색 */
export const useMyLogSearchQuery = (searchKeyword: string) => {
  // return useQuery(
  //   ['MyLogSearch', searchKeyword],
  //   async () => {
  //       const response = await axios.get(`/api/records/{bookId}`)
  //       const { data } = response
  //       return date
  //   },
  //   {
  //     enabled: !!searchKeyword, // 검색어가 있을때만 실행
  //     onSuccess: data => {},
  //     onError: error => {
  //      alert(error)
  //       throw error
  //     },
  //   },
  // )
  return useQuery(
    ['MyLogSearch', searchKeyword],
    () => {
      const filteredList = myLogSamples.filter(myLogSample => myLogSample.title.toLowerCase().includes(searchKeyword))
      console.log('filteredList', filteredList)
      return filteredList
    },
    {
      enabled: !!searchKeyword, // 검색어가 있을때만 실행
      onSuccess: data => {},
      onError: error => {
        alert(error)
        throw error
      },
    },
  )
}
