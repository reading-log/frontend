import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderLayout } from '../../components/Layouts'
import { css } from '@emotion/react'
import { Highlight } from '../../types/feed'
import FeedDetail from '../../components/readinglog/FeedDetail'
import SnowmanButton from '../../components/mylog/SnowmanButton'

const MyLogDetail = () => {
  const location = useLocation()
  const { myLog } = location.state
  const [showHighlight, setShowHighlight] = useState(true) // 처음에 하이라이트를 보이기
  const [showReview, setShowReview] = useState(false) // 처음에 서평은 숨김

  const handleHighlightToggle = () => {
    setShowHighlight(true)
    setShowReview(false)
  }

  const handleReviewToggle = () => {
    setShowReview(true)
    setShowHighlight(false)
  }

  console.log('highlight', myLog.highlight)

  return (
    <HeaderLayout>
      <div css={myLogDetailBox}>
        <FeedDetail feed={myLog} />

        <div css={outterBox}>
          <div css={oneLineInnerBox}>
            <div>
              한 줄 평
              <SnowmanButton />
            </div>
            <div>{myLog.oneLine}</div>
          </div>
        </div>

        <div css={outterBox}>
          <span
            onClick={() => handleHighlightToggle()}
            css={
              showHighlight
                ? css`
                    color: black;
                  `
                : css`
                    color: gray;
                  `
            }
          >
            하이라이트
          </span>
          ㅣ{/** 선택(하이라이트, 서평) 칸막이 */}
          <span
            onClick={() => handleReviewToggle()}
            css={
              showReview
                ? css`
                    color: black;
                  `
                : css`
                    color: gray;
                  `
            }
          >
            서평
          </span>
          <SnowmanButton />
          {myLog.highlight.map((highlight: Highlight, id: number) => (
            <div key={id} css={showHighlight ? innerBox : [hide, innerBox]}>
              <p>{highlight.content}</p>
              <p>p.{highlight.page}</p>
            </div>
          ))}
          <div css={showReview ? innerBox : [hide, innerBox]}>
            <p>{myLog.review}</p>
          </div>
          <button css={plus}>+</button>
        </div>
      </div>
    </HeaderLayout>
  )
}

export default MyLogDetail

const myLogDetailBox = css`
  background: #eae5e5;
  border: 1px solid #c1b2b2;
  border-radius: 6px;
`

const outterBox = css`
  background: #ffffff;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-top: 10px;
  margin-bottom: 1.5rem;
  span {
    font-weight: bold;
  }
`

const oneLineInnerBox = css`
  background: #ffffff;
  font-size: 12px;
  padding: 0rem;
  div {
    &:nth-of-type(1) {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &:nth-of-type(2) {
      width: auto;
      line-height: 1.2rem;
      border: 1px solid #eae5e5;
      border-radius: 6px;
      padding: 0.5rem 1.3rem 0.5rem 1.3rem;
    }
  }
`

const innerBox = css`
  background: #ffffff;
  height: auto;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
  p:nth-of-type(2) {
    /* page */
    font-size: 11px;
    float: right;
  }
`

const hide = css`
  display: none;
`

const plus = css`
  background: #dad1d1;
  width: 100%;
  height: 29px;
  text-align: center;
  font-weight: bold;
  border-radius: 6px;
  margin: auto;
  margin-top: 1rem;
`
