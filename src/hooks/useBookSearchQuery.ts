import { useQuery } from 'react-query'
// import axios from 'axios'
import myLogSamples from '../components/Sample/MyLogSample'

export const useBookSearchQuery = (keyword: string) => {
  // return useQuery('search', async () => {
  // try {
  //   const res = await axios(`/api/mylog/search?keyword=${keyword}`)
  //   const data = res.data
  //   return data.filter(bookList => bookList.title.toLowerCase().includes(keyword))
  // } catch (err) {
  //   alert(err)
  // }
  return useQuery('search', () => {
    console.log('myLogSamples', myLogSamples)
    const filteredList = myLogSamples.filter(myLogSample => myLogSample.title.toLowerCase().includes(keyword))
    console.log('filteredList', filteredList)
    return filteredList
  })
}
