import axios from 'axios'

// 무한 스크롤로 변경 중
const axiosFeed = async (page: number) => {
  try {
    // 현재 임시 API => Feed 무한 스크롤 API로 교체
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
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
