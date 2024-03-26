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
      <BookInfo feed={feed} />

      <div css={userInfo}>
        <span onClick={() => handleFeedClick(feed)}>{feed.nickname}</span>
        <span onClick={() => handleFeedClick(feed)}>{feed.date}</span>

        <span css={likeBox}>
          <img src={imageSrc} onClick={handleToggle} alt="Like" />
          <span>{feed.like}</span>
        </span>
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

const userInfo = css`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 30px;
  font-size: 13px;
  span {
    margin-right: 10px;
    &:last-of-type {
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

const likeBox = css`
  display: flex;
  align-items: center;
  float: right;
  img {
    width: 18px;
    margin-right: 10px;
  }
`
