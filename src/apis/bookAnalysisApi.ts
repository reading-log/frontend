import axios from 'axios'
import { useQuery } from 'react-query'

/**북로그 차트 정보 조회 */
export const useGetBookStats = (month: number) => {
  return useQuery(['BookStats', month], async () => {
    const { data } = await axios.get(`/api/stats/${month}`)
    return data
  })
}
