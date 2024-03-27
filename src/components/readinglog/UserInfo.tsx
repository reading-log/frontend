import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'
import { formatDate } from '../../utils/formatDate'

const UserInfo: React.FC<FeedProps> = ({ feed }) => {
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
