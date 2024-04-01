import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import MyLogList from '../../components/mylog/MyLogList'
import MyLogSearch from '../../components/mylog/MyLogSearch'

import BookImg from '../../assets/images/book.png'
import myLogSamples from '../../components/Sample/MyLogSample'
import RecordButton from '../../components/mylog/RecordButton'
import { flexCenter } from '../../styles/theme'
import { Book } from '../../types/book'
import { onBookList } from '../../apis/myLogApi'
import { useEffect, useState } from 'react'

const MyLog = () => {
  const myLogs: Book[] = myLogSamples // 나의 로그 기록 있음(서버 연결되면 삭제)
  // const myLogs = '' // 나의 로그 기록 없음(서버 연결되면 삭제)

  // const [myLogs, setMyLogs] = useState([]) // 서버 연결되면 주석 해제

  useEffect(() => {
    // 서버 연결되면 주석 해제
    // onBookList()
    //   .then(data => {
    //     setMyLogs(data)
    //   })
    //   .catch(error => {
    //     // 에러 처리
    //   })
  }, [myLogs])

  return (
    <div>
      <AllLayout>
        <div css={feedContainer}>
          {myLogs?.length > 0 ? (
            <div>
              <MyLogSearch placeholder="나의 로그 검색하기" />
              <MyLogList myLogList={myLogs} />
              <div css={recordBtn}>
                <RecordButton />
              </div>
            </div>
          ) : (
            <>
              <img src={BookImg} css={image} />
              <Link
                to="/mylog/books"
                css={css`
                  margin-top: 3rem;
                `}
              >
                ️✍️ 기록하기 ✍
              </Link>
            </>
          )}
        </div>
      </AllLayout>
    </div>
  )
}
export default MyLog

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
  text-align: center;
  a {
    color: #836565;
    font-weight: bold;
  }
`

const image = css`
  width: 200px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const recordBtn = css`
  margin-top: -22.5rem;
  margin-left: 17rem;
  position: fixed;
  z-index: 10;
`
