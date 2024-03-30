import axios from 'axios'

/* 나의로그 페이지 - 등록한 책 목록 */
export const onBookList = async () => {
  const response = await axios.get('/api/books') // api 미완성
  return response.data
}

/* 기록 상세 페이지 - 책 상세 정보 */
export const onBookDetail = async (bookId: number) => {
  const response = await axios.get(`/api/books/${bookId}`) // api 미완성
  return response.data
}

/* 기록 상세 페이지 - 독서 기록 목록 조회 */
export const onRecordList = async (bookId: number) => {
  const response = await axios.get(`/api/records/${bookId}`)
  return response.data
}

/* 기록 상세 페이지 - 한 줄 평 */
export const onOneLine = async (bookId: number) => {
  const response = await axios.get(`/api/summaries/${bookId}/me`)
  const { data } = response.data
  const oneLine = data.content
  return oneLine
}

/* 기록 상세 페이지 - 하이라이트 */
export const onHighlight = async (bookId: number) => {
  const response = await axios.get(`/api/highlights/${bookId}/me`)
  const { data } = response.data
  const highlightList = data.content
  return highlightList
}

/* 기록 상세 페이지 - 서평 */
export const onReview = async (bookId: number) => {
  const response = await axios.get(`/api/reviews/${bookId}/me`)
  const { data } = response.data
  const reviewList = data.content
  return reviewList
}
