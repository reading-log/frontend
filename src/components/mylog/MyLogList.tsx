import { css } from '@emotion/react'
import { FeedType } from '../../types/feed'
import { useNavigate } from 'react-router-dom'

interface MyLogList {
  myLogList: FeedType[]
}

const MyLogList: React.FC<MyLogList> = ({ myLogList }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('') // 나의로그 기록 등록(상세)
  }
  return (
    <>
      {myLogList.map((myLog, id) => (
        <div key={id} css={logBox} onClick={handleClick}>
          <img src={myLog.bookImg} />
          <p>{myLog.title}</p>
          <p>{myLog.author}</p>
        </div>
      ))}
    </>
  )
}

export default MyLogList

const logBox = css`
  display: inline-block;
  width: 153px;
  height: auto;
  text-align: center;
  border: 2px solid #c1b2b2;
  border-radius: 6px;
  padding: 1rem;
  margin: 0.5rem;
  img {
    width: 70px;
    height: auto;
    margin: 0.5rem;
  }
  p {
    color: black;
    font-size: 16px;
    font-weight: normal;
    &:last-of-type {
      font-size: 14px;
      margin-top: 1rem;
    }
  }
`
