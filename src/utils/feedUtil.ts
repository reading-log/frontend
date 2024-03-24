import axios from 'axios'

const axiosFeed = async (page: number) => {
  try {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`) // 현재 임시 API => Feed API로 교체
    const data = res.data
    if (!data) {
      throw new Error('No data received from server') // 응답이 없을 경우 에러를 throw
    }
    console.log(data)
    return data
  } catch (error) {
    console.log('Error fetching images:', error)
    throw error
  }
}

export default axiosFeed
