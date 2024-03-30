import { css } from '@emotion/react'
import OneLineInput from './OneLineInput'
import SnowmanButton from './SnowmanButton'
import { useEffect, useState } from 'react'
import { onOneLine } from '../../apis/myLogApi'

type OneLineType = {
  oneLineTest: string
  changeOneLine: boolean
  setChangeOneLine: (oneLine: boolean) => void
}
//                             서버 연결되면 oneLine을 bookId 로 수정
const OneLineBox: React.FC<OneLineType> = ({ oneLineTest, changeOneLine, setChangeOneLine }) => {
  const [oneLine, setOneLine] = useState(oneLineTest) // 서버 연결되면 useState('')로 수정하기

  useEffect(() => {
    // onOneLine(bookId)
    //   .then(data => {
    //     setOneLine(data)
    //   })
    //   .catch(error => {
    //     // 에러 처리
    //   })
  }, [oneLine])

  const handleSave = (updatedOneLine: string) => {
    setOneLine(updatedOneLine)
    setChangeOneLine(false)
  }

  return (
    <>
      {changeOneLine ? ( // 한 줄 평 수정할 경우
        // 서버 연결되면 oneLineTest={oneLineTest}만 삭제
        <OneLineInput onSave={handleSave} oneLineTest={oneLineTest} oneLine={oneLine} setOneLine={setOneLine} setChangeOneLine={setChangeOneLine} />
      ) : (
        <div css={oneLineInnerBox}>
          <div>
            한 줄 평
            <SnowmanButton setChangeOneLine={setChangeOneLine} />
          </div>
          <div>{oneLine}</div>
        </div>
      )}
    </>
  )
}

export default OneLineBox

const oneLineInnerBox = css`
  background: #ffffff;
  font-size: 12px;
  padding: 0rem;
  div {
    &:nth-of-type(1) {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &:nth-of-type(2) {
      width: auto;
      line-height: 1.2rem;
      border: 1px solid #eae5e5;
      border-radius: 6px;
      padding: 0.5rem 1.3rem 0.5rem 1.3rem;
    }
  }
`
