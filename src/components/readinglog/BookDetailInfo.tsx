import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'

const BookDetailInfo: React.FC<FeedProps> = ({ feed }) => {
  return (
    <>
      <div css={tempImg}>
        <img src={feed.bookImg} alt="BookImg" />
      </div>
      <p>{feed.author}</p>
      <p>{feed.publisher}</p>
      <p>{feed.title}</p>
      <p>카테고리: {feed.category}</p>
    </>
  )
}

export default BookDetailInfo

const tempImg = css`
  background: #d9d9d9;
  display: inline-block;
  width: 80px;
  height: auto;
  margin-right: 1rem;
  img {
    width: 80px;
    height: auto;
  }
`
