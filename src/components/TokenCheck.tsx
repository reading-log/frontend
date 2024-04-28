import { Outlet } from 'react-router-dom'

const TokenCheck = () => {
  // const navigate = useNavigate()

  // //인터셉터 설정
  // useEffect(() => {
  //   SetupInterceptors(navigate)
  // }, [navigate])

  return (
    <>
      <Outlet />
    </>
  )
}

export default TokenCheck
