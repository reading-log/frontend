import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { Book } from '../../types/book'
import BookImg from '../../assets/images/book.png'

interface MyLogList {
  myLogList: Book[]
}

const MyLogList: React.FC<MyLogList> = ({ myLogList }) => {
  const navigate = useNavigate()
  return (
    <>
      {myLogList.map((myLog, id) => (
        <div key={id} css={logBox} onClick={() => navigate('/mylog/detail', { state: { myLog } })}>
          {/* 나의로그 기록 등록(상세)로 이동*/}
          <img src={BookImg} />
          <p>{myLog.title}</p>
          <p>{myLog.author}</p>
        </div>
      ))}
    </>
  )
}

export default MyLogList

const logBox = css`
  background: #eae5e5;
  display: inline-block;
  width: 9.7rem;
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
    font-weight: bold;
    &:last-of-type {
      font-size: 14px;
      font-weight: normal;
      margin-top: 1rem;
    }
  }
`
