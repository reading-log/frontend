import axios from 'axios'
import Cookies from 'js-cookie'
import { NavigateFunction } from 'react-router-dom'
import { onLogout } from './userApi'

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

export const setupInterceptors = (navigate: NavigateFunction) => {
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
        //refresh 있는데 access token 만료, 토큰 재발급
        if (!isTokenRefreshing) {
          isTokenRefreshing = true // 토큰 갱신 중 표시

          const data = await axios.get(`/api/members/reissue`)
          const token = data.headers.authorization
          Cookies.set('accessToken', token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          originalRequest.headers.Authorization = `Bearer ${token}`
          isTokenRefreshing = false // 토큰 갱신 완료 후 변수 초기화
          // 새로운 토큰으로 지연되었던 요청 진행
          onTokenRefreshed(token)
          return axios(originalRequest)
        }
        // token이 재발급 되는 동안의 요청은 refreshSubscribers에 추가
        const retryOriginalRequest = new Promise(resolve => {
          addRefreshSubscriber(accessToken => {
            // 갱신한 accessToken으로 재설정
            originalRequest.headers.Authorization = 'Bearer ' + accessToken
            // originalRequest를 다시 실행
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }

      if (status === 405) {
        const gotoLogin = confirm('로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?')
        if (gotoLogin) {
          navigate('/login')
        }
      }

      if (status === 440) {
        //리프레시 토큰 만료 시 로그아웃 처리
        onLogout().then(() => {
          delete axios.defaults.headers.common['Authorization']
          Cookies.remove('accessToken')
        })
      }
      if (status === 500) {
        alert('서버에 문제가 발생했습니다.')
      }
      return Promise.reject(error)
    },
  )
}
