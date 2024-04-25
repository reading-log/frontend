import axios from 'axios'
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
  axios.interceptors.response.use(
    response => {
      return response
    },
    async error => {
      const {
        config,
        response: { status },
      } = error

      const originalRequest = config

      if (status === 401) {
        console.log('토큰 만료. 재로그인 필요')
        //refresh 있는데 access token 만료, 토큰 재발급
        if (!isTokenRefreshing) {
          isTokenRefreshing = true // 토큰 갱신 중 표시
        }
      }
    },
  )
}

export default SetupInterceptors
