import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import { flexCenter } from '../../styles/common'
import BookInput from '../../components/mylog/BookInput'
import { useLocation } from 'react-router-dom'
import BookImg from '../../assets/images/book.png'

const BookAutoRegister = () => {
  const location = useLocation()
  const book = location.state.book

  return (
    <div>
      <AllLayout>
        <div css={feedContainer}>
          <img
            src={book.cover ? book.cover : BookImg}
            css={css`
              width: 150px;
            `}
          />
          <BookInput isActive={false} bookInfo={book} />
        </div>
      </AllLayout>
    </div>
  )
}
export default BookAutoRegister

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
  border: 2px solid #c1b2b2;
  border-radius: 6px;
  padding: 1.5rem;
  img {
    margin-bottom: 2rem;
  }
`
