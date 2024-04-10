import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { body1, body2, calcRem, colors, flexCenter } from '../../styles/theme'
import { Book } from '../../types/book'

interface BookList {
  bookList: Book[]
}

const SearchBookList: React.FC<BookList> = ({ bookList, scrollRef }) => {
  const navigate = useNavigate()

  const handleClick = (book: Book) => {
    navigate('/mylog/book_auto_register', { state: { book } })
  }

  return (
    <div css={bookBoxContainer}>
      {bookList?.map((book, id) => (
        <div key={id} className="bookBox" onClick={() => handleClick(book)}>
          <div className="booxCover">
            <img src={book.cover} />
          </div>
          <div css={contentWrapper}>
            <p className="title">{book.title}</p>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
      ))}
      <div ref={scrollRef}></div>
    </div>
  )
}

export default SearchBookList

const bookBoxContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;

  .bookBox {
    height: ${calcRem(120)};
    background: ${colors.boxFill};
    display: flex;
    align-items: center;
    border-radius: ${calcRem(6)};
    border: 2px solid ${colors.boxStroke};
    padding: ${calcRem(13)} ${calcRem(4)};
  }

  .booxCover {
    width: 25%;
    ${flexCenter};
    img {
      max-width: ${calcRem(70)};
      max-height: ${calcRem(88)};
      height: 100%;
    }
  }
`

const contentWrapper = css`
  width: 75%;
  display: flex;
  gap: ${calcRem(9)};
  flex-direction: column;

  .title {
    ${body1}
    line-height: 1.2rem;
    font-weight: 500;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    ${body2}
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
