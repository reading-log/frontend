import { css } from '@emotion/react'
import { FeedProps, FeedType } from '../../types/feed'
import LikeCount from './LikeCount'
import { useNavigate } from 'react-router-dom'

const Feed: React.FC<FeedProps> = ({ user }) => {
  const navigate = useNavigate()

  const handleFeedClick = (feed: FeedType) => {
    navigate('/readinglog/detail', { state: { feed } })
  }
  return (
    <div css={feedBox}>
      <div css={bookTitle} onClick={() => handleFeedClick(user)}>
        <span>{user.title}</span>
      </div>

      <div css={bookInfo} onClick={() => handleFeedClick(user)}>
        <div css={tempImg}>
          <img src={user.img} alt="BookImg" />
        </div>
        <span>"{user.oneLine}"</span>
      </div>

      <div css={userInfo}>
        <span onClick={() => handleFeedClick(user)}>{user.nickname}</span>
        <span onClick={() => handleFeedClick(user)}>{user.date}</span>
        <LikeCount />
      </div>
    </div>
  )
}

export default Feed

const feedBox = css`
  background: #f8f6f6;
  height: auto;
  border-radius: 6px;
  margin-bottom: 30px;
`
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

const userInfo = css`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 30px;
  font-size: 13px;
  span {
    margin-right: 10px;
    &:last-child {
      margin-right: 15px;
    }
  }
  img {
    width: 15px;
    margin-top: 2px;
    margin-left: 10px;
    margin-right: 5px;
  }
`
