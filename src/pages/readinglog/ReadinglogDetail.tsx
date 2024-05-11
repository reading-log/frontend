import { css } from '@emotion/react'
import { useLocation, useParams } from 'react-router-dom'
import { useGetBookDetail } from '../../apis/readingLogApi'
import { Layout } from '../../components/Layouts'
import BookComment from '../../components/mylog/detail/BookComment'
import BookInfo from '../../components/mylog/detail/BookInfo'
import BookSummary from '../../components/mylog/detail/BookSummary'
import BookUserInfo from '../../components/readingLog/BookUserInfo'
import { LoadingIndicator } from '../../elements/Loading'
import { colors } from '../../styles/theme'

const ReadinglogDetail = () => {
  const { state } = useLocation()
  const { bookId, memberId } = useParams()
  const { data, isLoading } = useGetBookDetail(bookId, memberId)
  const bookData = data?.data

  return (
    <Layout isBack isFooter isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div css={bookDetailContainer}>
          <div className="bookLayout">
            <BookUserInfo likeCount={state?.likeCount} nickname={state?.nickname} id={state.id} />
            <BookInfo bookData={bookData?.bookInfo} />
            <div className="lineBlock" />
            <BookComment bookCommentData={[bookData?.summary]} />
            <div className="lineBlock" />
            <BookSummary bookHighlightData={bookData?.highlights} bookReviewData={bookData?.reviews} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ReadinglogDetail

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
