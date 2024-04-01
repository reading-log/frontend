import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { Book } from '../../types/book'

interface BookList {
  bookList: Book[]
}

const BookList: React.FC<BookList> = ({ bookList }) => {
  const navigate = useNavigate()

  const handleClick = (book: Book) => {
    navigate('/mylog/book_auto_register', { state: { book } })
  }

  return (
    <div
      css={css`
        margin-top: 4.5rem;
      `}
    >
      {bookList.map((book, id) => (
        <div key={id} css={bookBox} onClick={() => handleClick(book)}>
          <img src={book.cover} />
          <div css={contentWrapper}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList

const bookBox = css`
  background: #eae5e5;
  display: flex;
  height: auto;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  img {
    width: 6.5rem;
  }
`

const contentWrapper = css`
  p {
    color: black;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
    margin-bottom: 1rem;
    &:nth-of-type(1) {
      margin-top: 1rem;
    }
  }
`
