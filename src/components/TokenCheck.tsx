import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { setupInterceptors } from '../apis/interceptor'
const TokenCheck = () => {
  const navigate = useNavigate()

  //인터셉터 설정
  useEffect(() => {
    setupInterceptors(navigate)
  }, [navigate])

  return (
    <>
      <Outlet />
    </>
  )
}

export default TokenCheck
