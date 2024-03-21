import { css } from '@emotion/react'
import { useState } from 'react'

const LikeCount = () => {
  const [imageSrc, setImageSrc] = useState('../../assets/images/free-icon-love.png')

  const handleToggle = () => {
    // 좋아요 하트 아이콘
    setImageSrc(prev => {
      if (prev === '../../assets/images/free-icon-love.png') {
        return '../../assets/images/free-icon-love-fill.png'
      } else {
        return '../../assets/images/free-icon-love.png'
      }
    })
  }
  return (
    <span css={like}>
      <img src={imageSrc} onClick={handleToggle} alt="Like" />
      <span>0</span>
    </span>
  )
}

export default LikeCount

const like = css`
  display: flex;
  align-items: center;
  float: right;
  img {
    width: 18px;
    margin-right: 10px;
  }
`
