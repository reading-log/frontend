import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**토큰 유무 판별 */
export const useToken = () => {
  const navigate = useNavigate()
  const token = Cookies.get('accessToken')

  useEffect(() => {
    if (token) {
      // 토큰이 있으면 리딩로그 페이지로 이동
      navigate('/readinglog')
    }
  }, [token, navigate])

  return !!token
}
