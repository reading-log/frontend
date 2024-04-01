import { css } from '@emotion/react'
import SnowmanButton from './SnowmanButton'

type OneLineTextType = {
  onSave: (updatedOneLine: string) => void
  oneLineTest: string
  oneLine: string
  setOneLine: (setter: string) => void
  setChangeOneLine: (setter: boolean) => void
}
//                                    서버 연결되면 oneLineTest => oneLine 으로 수정
const OneLineInput: React.FC<OneLineTextType> = ({ onSave, oneLineTest, oneLine, setOneLine, setChangeOneLine }) => {
  const previewText = '한 줄 평은 50자 이내로만 기입할 수 있습니다.'

  const handleCancel = () => {
    // 한 줄 평 수정 중일 때 취소하기
    if (setChangeOneLine) {
      setChangeOneLine(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOneLine(e.target.value)
  }

  return (
    <div css={oneLineBox}>
      <div>
        한 줄 평
        <SnowmanButton />
      </div>

      <form onSubmit={e => e.preventDefault()}>
        {/* <form method="POST" action={`/api/summaries/${bookId}`} onSubmit={e => e.preventDefault()}>
        <input type="hidden" name="_method" value="PATCH"/> */}
        <div css={innerBox}>
          <textarea maxLength={50} placeholder={previewText} defaultValue={oneLineTest} onChange={handleChange}></textarea>
        </div>

        <div css={sortButton}>
          <button type="button" onClick={handleCancel}>
            취소하기
          </button>
          <button type="button" onClick={() => onSave(oneLine)}>
            저장하기
          </button>
        </div>
      </form>
    </div>
  )
}

export default OneLineInput

const oneLineBox = css`
  background: #ffffff;
  font-size: 12px;
  padding: 0rem;
  div {
    &:nth-of-type(1) {
      /* 한 줄 평 제목 */
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
`
const innerBox = css`
  width: auto;
  line-height: 1.2rem;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  padding: 0.5rem 1.3rem 0.5rem 1.3rem;
  textarea {
    background: #f6f3f3;
    width: 100%;
    height: 4rem;
    border: none;
    word-wrap: break-word;
    padding: 0.5rem 1rem 0.5rem 1rem;
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
    &:nth-of-type(2) {
      /* 저장하기 버튼 */
      display: inline-block;
      float: right;
      background: #dad1d1;
    }
  }
`
