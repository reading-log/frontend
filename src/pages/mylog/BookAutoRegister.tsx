import { useLocation } from 'react-router-dom'
import BookInput from '../../components/mylog/BookInput'

const BookAutoRegister = () => {
  const { state } = useLocation()

  return <BookInput bookInfo={state?.book} />
}
export default BookAutoRegister
