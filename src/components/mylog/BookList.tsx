import { css } from '@emotion/react'
import { FeedType } from '../../types/feed'
import { useNavigate } from 'react-router-dom'

interface BookList {
  bookList: FeedType[]
}

const BookList: React.FC<BookList> = ({ bookList }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/mylog/book_auto_register', { state: { bookList } })
  }

  return (
    <div
      css={css`
        margin-top: 4.5rem;
      `}
    >
      {bookList.map((book, id) => (
        <div key={id} css={bookBox} onClick={handleClick}>
          <div css={contentWrapper}>
            <img src={book.bookImg} />
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.publisher}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList

const bookBox = css`
  background: #eae5e5;
  height: auto;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  img {
    width: 70px;
  }
`

const contentWrapper = css`
  display: flex;
  align-items: center;
`
