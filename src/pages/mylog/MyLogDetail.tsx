import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import { css } from '@emotion/react'
import FeedDetail from '../../components/readinglog/FeedDetail'
import SnowmanButton from '../../components/mylog/SnowmanButton'
import HighlightBox from '../../components/mylog/HighlightBox'
import ReviewBox from '../../components/mylog/ReviewBox'
import OneLineBox from '../../components/mylog/OneLineBox'
import RecordList from '../../components/mylog/RecordList'
import { onBookDetail } from '../../apis/myLogApi'

const MyLogDetail = () => {
  const [changeOneLine, setChangeOneLine] = useState(false) // 한 줄 평 수정
  const [changeHighlight, setChangeHighlight] = useState(false) // 하이라이트 수정
  const [changeReview, setChangeReview] = useState(false) // 서평 수정

  const [showHighlight, setShowHighlight] = useState(true) // 처음에 하이라이트를 보이기
  const [showReview, setShowReview] = useState(false) // 처음에 서평은 숨김

  const [bookDetail, setBookDetail] = useState([]) // 책 상세 정보
  const location = useLocation()
  const { myLog } = location.state

  useEffect(() => {
    // onBookDetail(myLog.bookId)
    //   .then(data => {
    //     setBookDetail(data)
    //   })
    //   .catch(error => {
    //     // 에러 처리
    //   })
  }, [])

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
        {/* 서버 연결되면 feed={bookDetail}로 변경 */}
        <FeedDetail feed={myLog} />

        {/* 기록 */}
        <div css={outterBox}>
          <RecordList bookId={myLog.bookId} />
        </div>

        {/* 한 줄 평 */}
        <div css={outterBox}>
          {/* oneLineTest={myLog.oneLine} => 서버 연결되면 bookId={myLog.bookId}로 수정해야됨 */}
          <OneLineBox oneLineTest={myLog.oneLine} changeOneLine={changeOneLine} setChangeOneLine={setChangeOneLine} />
        </div>

        <div css={outterBox}>
          <span onClick={() => handleHighlightToggle()} css={showHighlight ? colorBlack : colorGray}>
            하이라이트
          </span>
          ㅣ{/* 선택(하이라이트, 서평) 칸막이 */}
          <span onClick={() => handleReviewToggle()} css={showReview ? colorBlack : colorGray}>
            서평
          </span>
          <HighlightBox highlightList={myLog.highlight} showHighlight={showHighlight} changeHighlight={changeHighlight} setChangeHighlight={setChangeHighlight} />
          <ReviewBox reviewList={myLog.review} showReview={showReview} changeReview={changeReview} setChangeReview={setChangeReview} />
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
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  span {
    font-weight: bold;
  }
`

const colorBlack = css`
  color: black;
`
const colorGray = css`
  color: gray;
`
