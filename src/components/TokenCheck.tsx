import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SetupInterceptors from '../apis/interceptor'

const TokenCheck = () => {
  const navigate = useNavigate()

  useEffect(() => {
    SetupInterceptors(navigate)
  }, [navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default TokenCheck
