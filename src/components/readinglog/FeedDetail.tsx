import { css } from '@emotion/react'
import { FeedProps } from '../../types/feed'
import { useState } from 'react'
import blackHeart from '../../assets/images/free-icon-love.png'
import redHeart from '../../assets/images/free-icon-love-fill.png'
import UserInfo from './UserInfo'
import BookDetailInfo from './BookDetailInfo'

const FeedDetail: React.FC<FeedProps> = ({ feed }) => {
  const [isLike, setIsLike] = useState(false)
  const [imageSrc, setImageSrc] = useState(blackHeart)

  const handleToggle = () => {
    // 좋아요 하트 아이콘
    setIsLike(prev => !prev)
    if (isLike) {
      setImageSrc(redHeart)
    } else {
      setImageSrc(blackHeart)
    }
  }

  return (
    <div css={feedBox}>
      <span css={userInfo}>
        <UserInfo feed={feed} />

        <span css={likeBox}>
          <img src={imageSrc} onClick={handleToggle} alt="Like" />
          <span>{feed.like}</span>
        </span>
      </span>

      <div css={bookInfo}>
        <BookDetailInfo feed={feed} />
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

const likeBox = css`
  display: flex;
  align-items: center;
  float: right;
  img {
    width: 18px;
    margin-right: 10px;
  }
`
