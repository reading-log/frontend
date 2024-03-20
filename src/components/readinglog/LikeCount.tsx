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
    <div>
      <img src={imageSrc} onClick={handleToggle} alt="Like" />
      <span>0</span>
    </div>
  )
}

export default LikeCount
