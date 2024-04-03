import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import MyLogList from '../../components/mylog/MyLogList'
import RecordButton from '../../components/mylog/RecordButton'
import { useMyLogSearchQuery } from '../../hooks/useMyLogSearchQuery'
import { flexCenter } from '../../styles/theme'
import { Book } from '../../types/book'

const MyLogSearchResult = () => {
  const [myLogList, setMyLogList] = useState<Book[]>([])
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''
  const searchResult = useMyLogSearchQuery(keyword).data

  useEffect(() => {
    setMyLogList(searchResult)
  }, [searchResult])

  return (
    <>
      <AllLayout>
        <div css={feedContainer}>
          {/*  <MyLogSearch placeholder={keyword} /> */}
          {myLogList === undefined || myLogList === null || myLogList.length === 0 ? (
            <>
              {/* 키워드 검색 시 해당 로그 목록이 없을 경우 */}
              <h1
                css={css`
                  margin-top: 3rem;
                `}
              >
                로그 검색 결과가 없습니다.
              </h1>
              <Link
                to="/mylog/books"
                css={css`
                  margin-top: 3rem;
                `}
              >
                ️✍️ 책 등록하기 ✍
              </Link>
            </>
          ) : (
            <>
              {/* 키워드 검색 시 해당 로그 목록이 있을 경우 */}
              <MyLogList myLogList={myLogList} />
              <RecordButton />
            </>
          )}
        </div>
      </AllLayout>
    </>
  )
}

export default MyLogSearchResult

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
  a {
    color: #836565;
    font-weight: bold;
  }
`
