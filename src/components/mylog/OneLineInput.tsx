import { css } from '@emotion/react'
import SnowmanButton from './SnowmanButton'

type OneLineTextType = {
  oneLine: string
}

const OneLineInput: React.FC<OneLineTextType> = ({ oneLine }) => {
  const previewText = '한 줄 평은 50자 이내로만 기입할 수 있습니다.'
  return (
    <div css={oneLineInnerBox}>
      <div>
        한 줄 평
        <SnowmanButton />
      </div>
      <div>
        <textarea maxLength={50} placeholder={previewText} defaultValue={oneLine}></textarea>
      </div>
    </div>
  )
}

export default OneLineInput

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
    textarea {
      background: #f6f3f3;
      width: 100%;
      height: 4rem;
      border: none;
      word-wrap: break-word;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
