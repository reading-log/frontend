import { css } from '@emotion/react'
import { FeedProps, FeedType } from '../../types/feed'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import blackHeart from '../../assets/images/free-icon-love.png'
import redHeart from '../../assets/images/free-icon-love-fill.png'
import BookInfo from './BookInfo'

const Feed: React.FC<FeedProps> = ({ feed }) => {
  const [isLike, setIsLike] = useState(false)
  const [imageSrc, setImageSrc] = useState(blackHeart)

  const navigate = useNavigate()

  const handleFeedClick = (feed: FeedType) => {
    navigate('/readinglog/detail', { state: { feed } })
  }

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
      <div css={userInfo}>
        <span onClick={() => handleFeedClick(feed)}>{feed.nickname}</span>
        <span css={likeBox}>
          <img src={imageSrc} onClick={handleToggle} alt="Like" />
          <span>{feed.like}</span>
        </span>
      </div>
      <BookInfo feed={feed} />
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

const userInfo = css`
  background-color: #eae5e5;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 6px;
  span:nth-of-type(1) {
    font-size: 14px;
    padding: 12px 20px 12px 20px;
    margin-right: auto;
  }
`

const likeBox = css`
  display: flex;
  align-items: center;
  margin-left: auto;
  img {
    width: 18px;
  }
  span {
    margin-left: -0.5rem;
  }
`
