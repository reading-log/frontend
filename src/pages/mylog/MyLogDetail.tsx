import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import { css } from '@emotion/react'
import FeedDetail from '../../components/readinglog/FeedDetail'
import SnowmanButton from '../../components/mylog/SnowmanButton'
import SaveButton from '../../components/mylog/SaveButton'
import HighlightBox from '../../components/mylog/HighlightBox'
import ReviewBox from '../../components/mylog/ReviewBox'
import OneLineBox from '../../components/mylog/OneLineBox'

const MyLogDetail = () => {
  const location = useLocation()
  const { myLog } = location.state

  const [changeOneLine, setChangeOneLine] = useState(false) // 한 줄 평 수정
  const [changeHighlight, setChangeHighlight] = useState(false) // 하이라이트 수정
  const [changeReview, setChangeReview] = useState(false) // 서평 수정

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

  return (
    <AllLayout>
      <div css={myLogDetailBox}>
        <FeedDetail feed={myLog} />

        <div css={outterBox}>
          {/* 한 줄 평 */}
          <OneLineBox oneLine={myLog.oneLine} changeOneLine={changeOneLine} setChangeOneLine={setChangeOneLine} />
        </div>

        <div css={outterBox}>
          <span onClick={() => handleHighlightToggle()} css={showHighlight ? colorBlack : colorGray}>
            하이라이트
          </span>
          ㅣ{/* 선택(하이라이트, 서평) 칸막이 */}
          <span onClick={() => handleReviewToggle()} css={showReview ? colorBlack : colorGray}>
            서평
          </span>
          <>
            {/* 하이라이트 */}
            {showHighlight && <SnowmanButton setChangeHighlight={setChangeHighlight} /> /* 수정&삭제 버튼 */}
            <HighlightBox highlightList={myLog.highlight} showHighlight={showHighlight} changeHighlight={changeHighlight} setChangeHighlight={setChangeHighlight} />
          </>
          <>
            {/* 서평 */}
            {showReview && <SnowmanButton setChangeReview={setChangeReview} /> /* 수정&삭제 버튼 */}
            <ReviewBox review={myLog.review} showReview={showReview} changeReview={changeReview} setChangeReview={setChangeReview} />
          </>
        </div>
      </div>
    </AllLayout>
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

// const oneLineInnerBox = css`
//   background: #ffffff;
//   font-size: 12px;
//   padding: 0rem;
//   div {
//     &:nth-of-type(1) {
//       font-size: 16px;
//       font-weight: bold;
//       margin-bottom: 1rem;
//     }
//     &:nth-of-type(2) {
//       width: auto;
//       line-height: 1.2rem;
//       border: 1px solid #eae5e5;
//       border-radius: 6px;
//       padding: 0.5rem 1.3rem 0.5rem 1.3rem;
//     }
//   }
// `

const colorBlack = css`
  color: black;
`
const colorGray = css`
  color: gray;
`
