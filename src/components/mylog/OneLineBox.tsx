import { css } from '@emotion/react'
import OneLineInput from './OneLineInput'
import SaveButton from './SaveButton'
import SnowmanButton from './SnowmanButton'

type OneLineType = {
  oneLine: string
  changeOneLine: boolean
  setChangeOneLine: (oneLine: boolean) => void
}

const OneLineBox: React.FC<OneLineType> = ({ oneLine, changeOneLine, setChangeOneLine }) => {
  const handleCancel = () => {
    // 한 줄 평 수정 중일 때 취소하기
    if (setChangeOneLine) {
      setChangeOneLine(false)
    }
  }

  return (
    <>
      {changeOneLine ? ( // 한 줄 평 수정할 경우
        <>
          <OneLineInput oneLine={oneLine} />
          <div css={sortButton}>
            <button onClick={handleCancel}>취소하기</button>
            <SaveButton />
          </div>
        </>
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

const sortButton = css`
  width: auto;
  margin-top: 1rem;
  button {
    width: 9rem;
    font-weight: bold;
    border: 1px solid #947a7a;
    border-radius: 6px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`
