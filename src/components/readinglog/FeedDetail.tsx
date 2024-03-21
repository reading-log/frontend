import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'
import LikeCount from './LikeCount'

const FeedDetail: React.FC<FeedProps> = ({ user }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }

  return (
    <div css={feedBox}>
      <span css={userInfo}>
        <img src={user.profileImg} css={profileImg} />
        <span
          css={css`
            font-weight: bold;
          `}
        >
          {user.nickname}
        </span>
        <br />
        <span
          css={css`
            color: #848484;
          `}
        >
          {formatDate(user.date)}
        </span>
        <LikeCount />
      </span>

      <div css={bookInfo}>
        <div css={tempImg}>
          <img src={user.img} alt="BookImg" />
        </div>
        <p>{user.author}</p>
        <p>{user.publisher}</p>
        <p>{user.title}</p>
        <p>카테고리: {user.category}</p>
      </div>
    </div>
  )
}

export default FeedDetail

const feedBox = css`
  background: #e4e4e4;
  height: auto;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`

const userInfo = css`
  width: 90%;
  height: auto;
  font-size: 15px;
  margin: 1rem;
  float: left;
`
const profileImg = css`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 1rem;
  float: left;
`

const bookInfo = css`
  background: #fbfbfb;
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 0 0 6px 6px;
  padding: 1rem;
  margin-top: 15px;
  p {
    width: 100%;
  }
`

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
