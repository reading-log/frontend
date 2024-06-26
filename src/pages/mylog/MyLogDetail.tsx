import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'
import { useGetBookInfo } from '../../apis/myLogApi'
import { Layout } from '../../components/Layouts'
import BookComment from '../../components/mylog/detail/BookComment'
import BookDate from '../../components/mylog/detail/BookDate'
import BookHighlightSummary from '../../components/mylog/detail/BookHighlightSummary'
import BookInfo from '../../components/mylog/detail/BookInfo'
import BookUserInfo from '../../components/mylog/detail/BookUserInfo'
import { LoadingIndicator } from '../../elements/Loading'
import { colors } from '../../styles/theme'

const MyLogDetail = () => {
  const { bookId } = useParams()

  /**책 정보 조회 */
  const { data, isLoading } = useGetBookInfo(bookId)
  const bookData = data?.data

  return (
    <Layout isBack isFooter isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div css={bookDetailContainer}>
          <div className="bookLayout">
            <BookUserInfo />
            <BookInfo bookData={bookData} />
            <div className="lineBlock" />
            <BookDate />
            <div className="lineBlock" />
            <BookComment />
            <div className="lineBlock" />
            <BookHighlightSummary />
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
