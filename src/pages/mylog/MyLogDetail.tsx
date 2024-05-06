import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'
import { useGetBookComment, useGetBookHighlight, useGetBookInfo, useGetBookRecordDate, useGetBookReview } from '../../apis/myLogApi'
import { Layout } from '../../components/Layouts'
import BookComment from '../../components/mylog/detail/BookComment'
import BookDate from '../../components/mylog/detail/BookDate'
import BookInfo from '../../components/mylog/detail/BookInfo'
import BookSummary from '../../components/mylog/detail/BookSummary'
import { LoadingIndicator } from '../../elements/Loading'
import { colors } from '../../styles/theme'

const MyLogDetail = () => {
  const { bookId } = useParams()

  /**책 정보 조회 */
  const { data: bookInfo, isLoading: isBookInfo } = useGetBookInfo(bookId)
  const bookData = bookInfo?.data

  /**책 날짜 정보 조회 */
  const { data: bookDate, isLoading: isBookDate } = useGetBookRecordDate(bookId)
  const bookRecordDate = bookDate?.data

  /**책 한줄평 조회 */
  const { data: bookComment, isLoading: isBookComment } = useGetBookComment(bookId)
  const bookCommentData = bookComment?.data

  /**책 하이라이트 조회 */
  const { data: bookHighlight, isLoading: isBookHighlight } = useGetBookHighlight(bookId)
  const bookHighlightData = bookHighlight?.data

  /**책 서평 조회 */
  const { data: bookReview, isLoading: isBookReview } = useGetBookReview(bookId)
  const bookReviewData = bookReview?.data

  const isLoading = isBookInfo || isBookDate || isBookHighlight || isBookReview || isBookComment

  return (
    <Layout isBack isFooter isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div css={bookDetailContainer}>
          <div className="bookLayout">
            <BookInfo bookData={bookData} />
            <div className="lineBlock" />
            <BookDate bookRecordDate={bookRecordDate} bookId={bookId} />
            <div className="lineBlock" />
            <BookComment bookCommentData={bookCommentData} bookId={bookId} />
            <div className="lineBlock" />
            <BookSummary bookHighlightData={bookHighlightData} bookReviewData={bookReviewData} bookId={bookId} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default MyLogDetail

const bookDetailContainer = css`
  margin-top: 3.5rem;
  padding: 1rem 1.5rem;
  height: calc(100vh - 8.5rem);
  overflow-y: auto;

  .bookLayout {
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 2px solid ${colors.boxStroke};
  }

  .lineBlock {
    display: block;
    height: 1.4rem;
    background-color: ${colors.boxFill};
  }
`
