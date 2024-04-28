import { NavigateFunction } from 'react-router-dom'

let isTokenRefreshing = false // 토큰 갱신 중 여부를 나타내는 변수
let refreshSubscribers: Array<(accessToken: string) => void> = [] // 실패한 요청들의 배열

// 실패한 요청들을 배열에 추가해주는 함수
const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback)
}

// 실패한 요청들을 다시 실행시켜주는 함수
const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach(callback => callback(accessToken))
  refreshSubscribers = [] // 배열 초기화
}

const SetupInterceptors = (navigate: NavigateFunction) => {
  // axios.interceptors.response.use(
  //   response => {
  //     return response
  //   },
  //   async error => {
  //     const {
  //       config,
  //       response: { status },
  //     } = error
  //     const originalRequest = config
  //     if (status === 401) {
  //       //refresh 있는데 access token 만료, 토큰 재발급
  //       if (!isTokenRefreshing) {
  //         isTokenRefreshing = true // 토큰 갱신 중 표시
  //         const data = await axios.get(`/api/members/reissue`)
  //         console.log('토큰재발급필요', data)
  //         // const token = data.headers.authorization
  //         // Cookies.set('accessToken', token)
  //         // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  //         // originalRequest.headers.Authorization = `Bearer ${token}`
  //         isTokenRefreshing = false // 토큰 갱신 완료 후 변수 초기화
  //         // 새로운 토큰으로 지연되었던 요청 진행
  //         onTokenRefreshed(token)
  //         return axios(originalRequest)
  //       }
  //       // token이 재발급 되는 동안의 요청은 refreshSubscribers에 추가
  //       const retryOriginalRequest = new Promise(resolve => {
  //         addRefreshSubscriber(accessToken => {
  //           // 갱신한 accessToken으로 재설정
  //           originalRequest.headers.Authorization = 'Bearer ' + accessToken
  //           // originalRequest를 다시 실행
  //           resolve(axios(originalRequest))
  //         })
  //       })
  //       return retryOriginalRequest
  //     }
  //   },
  // )
}

export default SetupInterceptors
