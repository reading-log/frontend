import { css } from '@emotion/react'
import { LoadingSpinner } from '../../elements/Loading'
import { body2, calcRem, colors, flexCenter } from '../../styles/theme'

interface IMyBookProps {
  scrollRef: (node?: Element | null | undefined) => void
  myBooks: any
  isLoading: boolean
}

const MyBook = ({ scrollRef, myBooks, isLoading }: IMyBookProps) => {
  return (
    <>
      {myBooks?.map((book: any) => (
        <div css={myBookBox} key={book?.bookId}>
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
  width: ${calcRem(154)};
  height: ${calcRem(172)};
  img {
    max-width: ${calcRem(70)};
    max-height: ${calcRem(88)};
  }
  p {
    max-width: ${calcRem(120)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: ${calcRem(12)};
    margin-bottom: ${calcRem(8)};
  }
  span {
    ${body2};
    max-width: ${calcRem(120)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
