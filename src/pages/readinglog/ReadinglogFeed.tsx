import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetBooklog } from '../../apis/readingLogApi'
import { Layout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import BookUserInfo from '../../components/mylog/detail/BookUserInfo'
import { LoadingIndicator } from '../../elements/Loading'
import SearchBar from '../../elements/SearchBar'
import { body1, body3, colors } from '../../styles/theme'

const ReadinglogFeed = () => {
  /**검색어 키워드 */
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const { isFetchingNextPage, fetchNextPage, hasNextPage, isLoading, result } = useGetBooklog(searchKeyWord)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  return (
    <Layout isFooter isHeader>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          {true ? (
            <div css={feedContainer}>
              <SearchBar placeHolder="도서명 검색하기" setSearchKeyWord={setSearchKeyWord} searchKeyWord={searchKeyWord} />
              <div css={bookDetailContainer}>
                <div className="bookLayout">
                  <BookUserInfo />
                  <div css={bookInfoBox}>
                    <img src={''} />
                    <div className="bookInfo">
                      <div>
                        <p className="bookName">{''}</p>
                        <p>{''}</p>
                      </div>
                      <div>
                        <p>dssdsd</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <EmptyMylog />
          )}
        </>
      )}
    </Layout>
  )
}

export default ReadinglogFeed

const feedContainer = css`
  margin-top: 3.5rem;
  background-color: aquamarine;
  height: calc(100vh - 5rem);
`

const bookDetailContainer = css`
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

const bookInfoBox = css`
  padding: 1rem;
  display: flex;
  img {
    max-width: 6rem;
    max-height: 8rem;
    width: 100%;
    height: 100%;
    margin-right: 1.5rem;
    background-color: ${colors.main1};
  }
  .bookInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 12.5rem;
    ${body3};
    line-height: 1rem;

    .bookName {
      ${body1};
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`
