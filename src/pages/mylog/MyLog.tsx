import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import { flexCenter } from '../../styles/common'
import { Link } from 'react-router-dom'
import MyLogList from '../../components/mylog/MyLogList'
import MyLogSearch from '../../components/mylog/MyLogSearch'

import BookImg from '../../assets/images/book.png'
import myLogSamples from '../../components/Sample/MyLogSample'
import RecordButton from '../../components/mylog/RecordButton'

const MyLog = () => {
  const myLogs = myLogSamples // 나의 로그 기록 있음
  // const myLogs = null //나의 로그 기록 없음

  return (
    <div>
      <AllLayout>
        <div css={feedContainer}>
          {myLogs === null ? (
            <>
              <img src={BookImg} css={image} />
              <Link
                to="/mylog/record"
                css={css`
                  margin-top: 3rem;
                `}
              >
                ️✍️ 기록하기 ✍
              </Link>
            </>
          ) : (
            <>
              <div css={searchBar}>
                <MyLogSearch placeholder="나의 로그 검색하기" />
                <MyLogList myLogList={myLogs} />
                <RecordButton />
              </div>
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

const searchBar = css`
  form {
    top: 0.11rem;
    position: relative;
  }
`
