import { css } from '@emotion/react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDeleteLike, usePostLike } from '../../apis/readingLogApi'
import { body2, colors } from '../../styles/theme'

const BookUserInfo = ({ nickname, likeCount, id }: { nickname: string; likeCount: number; id: number | string }) => {
  const [heartCount, setHeartCount] = useState(likeCount)

  const postLikeMutation = usePostLike()
  const deleteLikeMutation = useDeleteLike()
  /**좋아요 등록 */
  const handlelike = () => {
    if (true) {
      setHeartCount(heartCount + 1)
      postLikeMutation.mutate(id, {
        onError: () => {
          setHeartCount(heartCount)
        },
      })
    } else {
      setHeartCount(heartCount - 1)
      deleteLikeMutation.mutate(id, {
        onError: () => {
          setHeartCount(heartCount)
        },
      })
    }
  }

  return (
    <div css={detailBox}>
      <div className="userInfoBox">
        <p className="userName">{nickname}</p>
        <div className="userHeart">
          <FontAwesomeIcon icon={faHeart} size="1x" onClick={handlelike} />
          <p>{heartCount}</p>
        </div>
      </div>
    </div>
  )
}

export default BookUserInfo

const detailBox = css`
  // 유저 정보 박스
  .userInfoBox {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0.5rem 0.5rem;
    background-color: ${colors.boxFill};
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: ${colors.main1};
    }

    .userName {
      ${body2};
    }

    .userHeart {
      margin-left: auto;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5rem;
        margin-bottom: 0.1rem;
        ${body2};
      }
    }
  }
`
