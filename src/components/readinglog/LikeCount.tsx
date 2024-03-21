import { css } from '@emotion/react'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'
import blackHeart from '../../assets/images/free-icon-love.png'
import redHeart from '../../assets/images/free-icon-love-fill.png'

type likeProp = {
  likeCount: number
}

const LikeCount: React.FC<likeProp> = ({ likeCount }) => {
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

  // const [likeCount, setLikeCount] = useState(like)

  // const likePostMutation = useMutation(likePost, {
  //   // onMutate를 실행시킴
  //   onMutate: async () => {
  //     // 좋아요 상태와 카운트를 업데이트하고, 이전 상태를 저장한다.
  //     setIsLike(prev => !prev)
  //     setLikeCount((prev: number) => prev + (isLike ? -1 : 1))
  //     // 이미지를 변경한다.
  //     setImageSrc(isLike ? '../../assets/images/free-icon-love-fill.png' : '../../assets/images/free-icon-love.png')
  //   },
  //   // mutation이 실패할 때 이전 상태로 롤백
  //   onError: () => {
  //     setIsLike(prev => !prev)
  //     setLikeCount((prev: number) => prev + (isLike ? 1 : -1))
  //     // 이미지를 변경한다.
  //     setImageSrc('../../assets/images/free-icon-love.png')
  //   },
  //   // mutation이 성공하거나 실패하면 쿼리를 무효화하여 최신 데이터를 가져온다.
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['post', postId])
  //   },
  // })

  // const handleToggle = () => {
  //   // 좋아요 하트 아이콘
  //   likePostMutation.mutate(postId)
  // }

  return (
    <span css={likeBox}>
      <img src={imageSrc} onClick={handleToggle} alt="Like" />
      <span>{likeCount}</span>
    </span>
  )
}

export default LikeCount

const likeBox = css`
  display: flex;
  align-items: center;
  float: right;
  img {
    width: 18px;
    margin-right: 10px;
  }
`
