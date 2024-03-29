import { useQuery } from 'react-query'
import axios from 'axios'

import extendedFeedSamples from '../components/Sample/FeedSample'

/* 리딩로그 피드 검색 */
export const useSearchQuery = (searchKeyword: string) => {
  // return useQuery(
  //   ['ReadingLogSearch', searchKeyword],
  //   async () => {
  //     const res = await axios.get(`/api/readinglog/search?keyword=${searchKeyword}`)
  //     const { data } = res
  //     return data
  //   },
  //   {
  //     enabled: !!searchKeyword, //검색어가 있을때만 실행
  //     onSuccess: data => {},
  //     onError: error => {
  //       alert(error)
  //       throw error
  //     },
  //   },
  // )
  return useQuery(
    ['ReadingLogSearch', searchKeyword],
    () => {
      return extendedFeedSamples.filter(feedSample => feedSample.title.toLowerCase().includes(searchKeyword))
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
