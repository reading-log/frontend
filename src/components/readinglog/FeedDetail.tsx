import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'
import LikeCount from './LikeCount'

const FeedDetail: React.FC<FeedProps> = ({ user }) => {
  return (
    <div css={feedBox}>
      <div css={bookTitle}>
        <div css={userInfo}>
          <span>{user.nickname}</span>
          <span>{user.date}</span>
          <LikeCount />
        </div>
      </div>

      <div css={bookInfo}>
        <div css={tempImg}>
          <img src={user.img} alt="BookImg" />
        </div>
        <span>{user.title}</span>
        <span>카테고리: {user.category}</span>
      </div>
    </div>
  )
}

export default FeedDetail

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
