import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { formatDate2 } from '../../utils/formatDate'
import { onRecordList } from '../../apis/myLogApi'

type BookId = {
  bookId: number
}

const RecordList: React.FC<BookId> = bookId => {
  const [records, setRecords] = useState([])

  const handleAdd = () => {
    // 임시(서버 연결되면 삭제)
    const newData = new Date()
    const currentDate = formatDate2(newData)
    setRecords(prev => [...prev, currentDate])
  }

  useEffect(() => {
    onRecordList(bookId)
      .then(data => {
        setRecords(data)
      })
      .catch(error => {
        // 에러 처리
      })
  }, [records])

  return (
    <>
      <p css={text}>📗기록</p>

      <div css={recordFrame}>
        {records.map((record, index) => (
          <div key={index} css={recordBox}>
            <span>{record}</span>
          </div>
        ))}
        {/* 
        <form method="POST" action="/api/books">
          <button>+</button> 
        </form> 
                    서버 연결되면 주석 해제 
        */}
        <button onClick={handleAdd}>+</button> {/* 임시 */}
      </div>
    </>
  )
}

export default RecordList

const text = css`
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 0.5rem;
`

const recordFrame = css`
  display: flex;
  align-items: center;
  width: 100%;
  button {
    width: 2rem;
    height: 2rem;
    border: 1px solid #bdbcbc;
    border-radius: 6px;
    margin-left: auto;
    &:hover {
      background: #dad1d1;
    }
  }
`

const recordBox = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid #bdbcbc;
  border-radius: 6px;
  margin-right: 0.5rem;
`
