import { css } from '@emotion/react'
import { useGetLikeBookLogs } from '../../apis/userApi'
import { Layout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import ReadingBook from '../../components/readingLog/ReadingBook'
import { LoadingIndicator } from '../../elements/Loading'
import { TBookLog } from '../../types/book'

const LikeFeed = () => {
  const { data, isLoading } = useGetLikeBookLogs()
  const likeBookList: TBookLog[] = data?.data
  return (
    <Layout isBack isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          {likeBookList?.length ? (
            <div css={feedContainer}>
              <div css={bookDetailContainer}>{likeBookList?.map(booklog => <ReadingBook key={booklog?.bookId} booklog={booklog} />)}</div>
            </div>
          ) : (
            <EmptyMylog isLike />
          )}
        </>
      )}
    </Layout>
  )
}

export default LikeFeed

const feedContainer = css`
  margin-top: 3.5rem;
`

const bookDetailContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 1rem 1.5rem;
  height: calc(100vh - 3.5rem);
  overflow-y: auto;
`
