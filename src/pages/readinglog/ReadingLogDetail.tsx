import { useLocation } from 'react-router-dom'
import { HeaderLayout } from '../../components/Layouts'
import { css } from '@emotion/react'
import { Highlight } from '../../types/feed'
import FeedDetail from '../../components/readinglog/FeedDetail'
import { useState } from 'react'

const ReadingLogDetail = () => {
  const location = useLocation()
  const { feed } = location.state
  const [showHighlight, setShowHighlight] = useState(true) // 초기에 하이라이트를 보이기
  const [showReview, setShowReview] = useState(false) // 초기에 서평은 숨김

  const handleHighlightToggle = () => {
    setShowHighlight(true)
    setShowReview(false)
  }

  const handleReviewToggle = () => {
    setShowReview(true)
    setShowHighlight(false)
  }

  return (
    <HeaderLayout>
      <div>
        <FeedDetail user={feed} />
        <div css={outterBox}>
          <div css={oneLineInnerBox}>
            <span>"</span>
            {feed.oneLine}
            <span>"</span>
          </div>
        </div>

        <div css={outterBox}>
          <div css={selectBox}>
            <span
              onClick={() => handleHighlightToggle()}
              css={
                showHighlight
                  ? css`
                      font-weight: bold;
                    `
                  : css`
                      font-weight: normal;
                    `
              }
            >
              하이라이트
            </span>
            ㅣ
            <span
              onClick={() => handleReviewToggle()}
              css={
                showReview
                  ? css`
                      font-weight: bold;
                    `
                  : css`
                      font-weight: normal;
                    `
              }
            >
              서평
            </span>
          </div>
          {feed.highlight[0].map((highlight: Highlight, id: number) => (
            <div css={showHighlight ? innerBox : [hide, innerBox]} key={id}>
              <p>{highlight.content}</p>
              <p>p.{feed.highlight[1].page}</p>
            </div>
          ))}

          <div css={showReview ? innerBox : [hide, innerBox]}>
            <span>{feed.review}</span>
          </div>
        </div>
      </div>
    </HeaderLayout>
  )
}

export default ReadingLogDetail

const outterBox = css`
  background: #e4e4e4;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const oneLineInnerBox = css`
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
  span {
    font-size: 42px;
  }
`

const innerBox = css`
  background: #ffffff;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
  & > p:nth-child(2) {
    font-size: 11px;
    float: right;
  }
`

const selectBox = css`
  background: #adadad;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 27px;
  span {
    padding: 5px 40px 5px 40px;
  }
`
const hide = css`
  display: none;
`
