import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'

const BookDetailInfo: React.FC<FeedProps> = ({ feed }) => {
  return (
    <>
      <img src={feed.bookImg} alt="BookImg" css={bookImg} />
      <div css={textContainer}>
        <p>{feed.title}</p>
        <p>{feed.author}</p>
        <p>출판사: {feed.publisher}</p>
        <p>카테고리: {feed.category}</p>
      </div>
    </>
  )
}

export default BookDetailInfo

const bookImg = css`
  width: 6.5rem;
  height: auto;
`

const textContainer = css`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    line-height: 1rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
    &:nth-of-type(1) {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    &:nth-of-type(3) {
      margin-top: 2rem;
    }
    &:last-of-type {
    }
  }
`
