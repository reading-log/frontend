import { css } from '@emotion/react'
import { useState } from 'react'

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
  width: 72px;
  height: 97px;
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

interface User {
  title: string
  nickname: string
  date: string
}

interface FeedProps {
  user: User
}

const Feed: React.FC<FeedProps> = ({ user }) => {
  const [imageSrc, setImageSrc] = useState('../assets/images/free-icon-love.png')

  const oneLine: string = '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.'
  const like: number = 0

  const handleToggle = () => {
    // 좋아요 하트 아이콘
    setImageSrc(prev => {
      if (prev === '../assets/images/free-icon-love.png') {
        return '../assets/images/free-icon-love-fill.png'
      } else {
        return '../assets/images/free-icon-love.png'
      }
    })
  }

  return (
    <div css={feedBox}>
      <div css={bookTitle}>
        <span>{user.title}</span>
      </div>

      <div css={bookInfo}>
        <div css={tempImg}>
          <img></img>
        </div>
        <span>"{oneLine}"</span>
      </div>

      <div css={userInfo}>
        <span>{user.nickname}</span>
        <span>{user.date}</span>
        <img src={imageSrc} onClick={handleToggle} />
        <span>{like}</span>
      </div>
    </div>
  )
}

export default Feed
