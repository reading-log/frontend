import { useQuery } from 'react-query'
// import axios from 'axios'
import extendedFeedSamples from '../components/Sample/FeedSample'

export const useSearchQuery = (keyword: string) => {
  // return useQuery(
  //   ['search', keyword],
  //   async () => {
  //     try {
  //       const res = await axios(`/api/readinglog/search?keyword=${keyword}`)
  //       const data = res.data
  //       return data.filter(feed => feed.title.toLowerCase().includes(keyword))
  //     } catch (err) {
  //       alert(err)
  //     }
  //   },
  //   {
  //     enabled: !!keyword, // 항상 true 값으로 고정
  //   },
  // )
  return useQuery(
    ['search', keyword],
    () => {
      return extendedFeedSamples.filter(feedSample => feedSample.title.toLowerCase().includes(keyword))
    },
    {
      enabled: !!keyword, // 항상 true 값으로 고정
    },
  )
}
