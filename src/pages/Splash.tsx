import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultLayout } from '../components/Layouts'
import { title1 } from '../styles/theme'

const Splash = () => {
  const navigate = useNavigate()

  /** 리딩로그로 리다이렉트*/
  useEffect(() => {
    setTimeout(() => {
      navigate('/readinglog')
    }, 1000)
  }, [navigate])

  return (
    <DefaultLayout>
      <h1 css={title1}>ReadingLog</h1>
    </DefaultLayout>
  )
}

export default Splash
