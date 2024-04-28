import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '../../elements/Loading'
import { body2, body3, colors, ellipsis, flexCenter } from '../../styles/theme'

interface IMyBookProps {
  scrollRef: (node?: Element | null | undefined) => void
  myBooks: any
  isLoading: boolean
}

const MyBook = ({ scrollRef, myBooks, isLoading }: IMyBookProps) => {
  const navigate = useNavigate()

  const handleBookClick = (bookId: number) => {
    navigate(`/mylog/${bookId}`)
  }

  return (
    <>
      {myBooks?.map((book: any) => (
        <div css={myBookBox} key={book?.bookId} onClick={() => handleBookClick(book?.bookId)}>
          <div>
            <img src={book?.cover} alt="책이미지" />
          </div>
          <p>{book?.title}</p>
          <span>{book?.author}</span>
        </div>
      ))}
      {isLoading && <LoadingSpinner />}
      <div ref={scrollRef}></div>
    </>
  )
}

export default MyBook

const myBookBox = css`
  border: 2px solid ${colors.boxStroke};
  border-radius: 0.5rem;
  ${flexCenter};
  flex-direction: column;
  background-color: ${colors.boxFill};
  padding: 1rem 0.5rem;
  margin-bottom: 0.8rem;

  width: 10rem;
  height: 13rem;

  img {
    max-width: 6rem;
    max-height: 7rem;
  }

  p {
    ${ellipsis}
    ${body2};
    font-weight: 500;
    max-width: 9rem;
    margin: 0.6rem 0;
  }
  span {
    ${body3};
    ${ellipsis}
    max-width: 9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
