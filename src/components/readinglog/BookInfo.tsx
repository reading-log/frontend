import { css } from '@emotion/react'
import { FeedProps, FeedType } from '../../types/feed'
import { useNavigate } from 'react-router-dom'

const BookInfo: React.FC<FeedProps> = ({ feed }) => {
  const navigate = useNavigate()

  const handleFeedClick = (feed: FeedType) => {
    navigate('/readinglog/detail', { state: { feed } })
  }

  return (
    <div css={bookInfo} onClick={() => handleFeedClick(feed)}>
      <img src={feed.bookCover} alt="BookImg" />
      <div css={textContainer}>
        <p>{feed.bookTitle}</p>
        <p>{feed.bookAuthor}</p>
        <p>"{feed.content}"</p>
      </div>
    </div>
  )
}

export default BookInfo

const bookInfo = css`
  display: flex;
  width: 93%;
  height: auto;
  margin: 1rem;
  img {
    width: 6.5rem;
    height: auto;
    margin-bottom: 1rem;
  }
`

const textContainer = css`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  p {
    font-size: 12px;
    line-height: 1rem;
    margin-top: 0.5rem;
    &:nth-of-type(1) {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2rem;
    }
    &:last-of-type {
      margin-top: 1.5rem;
    }
  }
`
