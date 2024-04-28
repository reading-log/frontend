import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '../../elements/Loading'
import { body1, body2, body3, colors, ellipsis, flexCenter } from '../../styles/theme'
import { ISearchBook } from '../../types/book'

interface BookList {
  bookList?: ISearchBook[]
  scrollRef: (node?: Element | null | undefined) => void
  isLoading: boolean
  scroll?: React.MutableRefObject<HTMLDivElement | null>
}

const SearchBookList: React.FC<BookList> = ({ bookList, scrollRef, isLoading, scroll }) => {
  const navigate = useNavigate()

  const handleClick = (book: ISearchBook) => {
    navigate('/mylog/book_auto_register', { state: { book } })
  }

  return (
    <div css={bookBoxContainer} ref={scroll}>
      {bookList?.map((book, id) => (
        <div key={id} className="bookBox" onClick={() => handleClick(book)}>
          <div className="bookCover">
            <img src={book?.cover} />
          </div>
          <div css={contentWrapper}>
            <p className="title">{book?.title}</p>
            <p>{book?.author}</p>
            <p className="publisher">{book?.publisher}</p>
          </div>
        </div>
      ))}
      {isLoading && <LoadingSpinner />}
      <div ref={scrollRef}></div>
    </div>
  )
}

export default SearchBookList

const bookBoxContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .bookBox {
    height: 7rem;
    background: ${colors.boxFill};
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    border: 2px solid ${colors.boxStroke};
    padding: 0.5rem;
  }

  .bookCover {
    background-color: beige;
    max-width: 5rem;
    width: 6rem;

    ${flexCenter};
    img {
      max-width: 5rem;
      max-height: 6rem;
      height: 100%;
    }
  }
`

const contentWrapper = css`
  width: 14rem;
  margin-left: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  .title {
    ${body1}
    font-weight: 500;
    ${ellipsis};
    margin-bottom: 0.2rem;
  }

  p {
    ${body2}
    ${ellipsis};
  }

  .publisher {
    ${body3}
  }
`
