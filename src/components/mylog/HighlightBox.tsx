import { css } from '@emotion/react'
import { Highlight } from '../../types/feed'
import { useState } from 'react'
import SaveButton from './SaveButton'

type HighlightType = {
  highlightList: Highlight[]
  showHighlight: boolean
  changeHighlight: boolean
  setChangeHighlight: (setter: boolean) => void
}

const HighlightBox: React.FC<HighlightType> = ({ highlightList, showHighlight, changeHighlight, setChangeHighlight }) => {
  const [highlights, setHighlights] = useState(highlightList) // 서버에서 주는 하이라이트 데이터
  const previewHighlight = '하이라이트는 50자 이내로만 기입할 수 있습니다.'

  const handleClick = () => {
    const newHighlight = {
      content: '',
      page: 0,
    }
    setHighlights(prev => [...prev, newHighlight])
  }

  const handleCancel = () => {
    // 하이라이트 수정 중일 때 취소하기
    if (setChangeHighlight) {
      setHighlights(highlightList)
      setChangeHighlight(false)
    }
  }

  return (
    <>
      {changeHighlight ? ( // 하이라이트 수정할 경우
        <>
          {highlights.map((highlight: Highlight, id: number) => (
            <div key={id} css={showHighlight ? innerBox : [hide, innerBox]}>
              <textarea
                css={css`
                  height: 4.8rem;
                `}
                maxLength={50}
                placeholder={previewHighlight}
                defaultValue={highlight.content}
              ></textarea>
              <input
                defaultValue={highlight.page}
                css={css`
                  float: right;
                `}
              />
            </div>
          ))}
          {changeHighlight && showHighlight && (
            <button onClick={handleClick} css={plus}>
              +
            </button>
          )}
          <div css={sortButton}>
            <button onClick={handleCancel}>취소하기</button>
            <SaveButton />
          </div>
        </>
      ) : (
        highlights.map((highlight: Highlight, id: number) => (
          <div key={id} css={showHighlight ? innerBox : [hide, innerBox]}>
            <p>{highlight.content}</p>
            <p>p.{highlight.page}</p>
          </div>
        ))
      )}
    </>
  )
}

export default HighlightBox

const innerBox = css`
  background: #ffffff;
  height: auto;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
  p:nth-of-type(2) {
    /* page */
    font-size: 11px;
    float: right;
  }
  textarea {
    background: #f6f3f3;
    width: 100%;
    border: none;
    word-wrap: break-word;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
  input {
    width: 3rem;
  }
`

const hide = css`
  display: none;
`

const plus = css`
  width: 100%;
  height: 29px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #eae5e5;
  border-radius: 6px;
  margin: auto;
  margin-top: 0.5rem;
  &:hover {
    background: #dad1d1;
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
