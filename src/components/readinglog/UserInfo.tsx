import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'

const UserInfo: React.FC<FeedProps> = ({ feed }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }

  return (
    <>
      <img src={feed.profileImg} css={profileImg} />
      <span
        css={css`
          font-weight: bold;
        `}
      >
        {feed.nickname}
      </span>
      <br />
      <span
        css={css`
          color: #848484;
        `}
      >
        {formatDate(feed.date)}
      </span>
    </>
  )
}

export default UserInfo

const profileImg = css`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 1rem;
  float: left;
`
