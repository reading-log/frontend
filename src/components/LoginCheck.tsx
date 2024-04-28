/**로그인 유저 판단 => 로그인 유저의 경우 접근 금지 */

import { Outlet } from 'react-router-dom'
import { useToken } from '../hooks/useToken'
import NotAllow from '../pages/NotAllow'

const LoginCheck = () => {
  /**로그인 되어있으면 리턴 */
  const isLogin = useToken()
  if (isLogin) return <NotAllow />

  return (
    <>
      <Outlet />
    </>
  )
}

export default LoginCheck
