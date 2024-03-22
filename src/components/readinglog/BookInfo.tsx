import { css } from '@emotion/react'
import { FeedProps, FeedType } from '../../types/feed'
import { useNavigate } from 'react-router-dom'

const BookInfo: React.FC<FeedProps> = ({ feed }) => {
  const navigate = useNavigate()

  const handleFeedClick = (feed: FeedType) => {
    navigate('/readinglog/detail', { state: { feed } })
  }

  return (
    <div>
      <div css={bookTitle} onClick={() => handleFeedClick(feed)}>
        <span>{feed.title}</span>
      </div>

      <div css={bookInfo} onClick={() => handleFeedClick(feed)}>
        <div css={tempImg}>
          <img src={feed.bookImg} alt="BookImg" />
        </div>
        <span>"{feed.oneLine}"</span>
      </div>
    </div>
  )
}

export default BookInfo

const bookTitle = css`
  display: flex;
  align-items: center;
  background-color: #f3f0f0;
  width: 100%;
  height: auto;
  border-radius: 6px;
  span {
    font-size: 16px;
    padding: 12px 20px 12px 20px;
    margin: auto;
  }
`

const bookInfo = css`
  display: flex;
  width: 93%;
  height: 100px;
  margin-top: 15px;
  span {
    width: 70%;
    font-size: 13px;
    margin-top: 15px;
    margin-left: 15px;
  }
`

const tempImg = css`
  background: #d9d9d9;
  display: inline-block;
  width: 80px;
  height: auto;
  margin-left: 15px;
  img {
    width: 80px;
    height: auto;
  }
`
