import { css } from '@emotion/react'
import { Highlight } from '../../types/feed'
import { useState } from 'react'
import SaveButton from './SaveButton'
import SnowmanButton from './SnowmanButton'

type HighlightType = {
  highlightList: Highlight[]
  showHighlight: boolean
  changeHighlight: boolean
  setChangeHighlight: (setter: boolean) => void
}

const HighlightBox: React.FC<HighlightType> = ({ highlightList, showHighlight, changeHighlight, setChangeHighlight }) => {
  const [highlights, setHighlights] = useState(highlightList.map(highlight => ({ ...highlight, editing: false, cancelSaveVisible: false })))

  const previewHighlight = '하이라이트는 50자 이내로만 기입할 수 있습니다.'

  const handlePlus = () => {
    const newHighlight = {
      content: '',
      page: 0,
      editing: false, // 새로운 하이라이트 추가 시 editing 상태는 false로 설정
      cancelSaveVisible: false,
    }
    setHighlights(prev => [...prev, newHighlight])
  }

  const handleCancel = (index: number) => {
    // 하이라이트 수정 중일 때 취소하기
    const updatedHighlights = [...highlights]
    updatedHighlights[index].content = highlightList[index].content // 수정 취소 시 원래 하이라이트로 복원
    updatedHighlights[index].page = highlightList[index].page
    updatedHighlights[index].editing = false
    updatedHighlights[index].cancelSaveVisible = false
    setHighlights(updatedHighlights)
    setChangeHighlight(false)
  }

  const handleEdit = (index: number) => {
    const updatedHighlights = [...highlights]
    updatedHighlights[index].editing = true
    updatedHighlights[index].cancelSaveVisible = true
    setHighlights(updatedHighlights)
    setChangeHighlight(true)
  }

  const handleSave = (index: number) => {
    // 수정 저장하기
    const updatedHighlights = [...highlights]
    updatedHighlights[index].editing = false
    updatedHighlights[index].cancelSaveVisible = false
    setHighlights(updatedHighlights)
    setChangeHighlight(false)
  }

  return (
    <>
      {highlights.map((highlight, index) => (
        <div key={index} css={showHighlight ? innerBox : [hide, innerBox]}>
          {highlight.editing ? ( // 해당 요소 수정 중일 때
            <>
              <textarea
                css={css`
                  height: 4.8rem;
                `}
                maxLength={50}
                placeholder={previewHighlight}
                defaultValue={highlight.content}
                onChange={e => {
                  const updatedHighlights = [...highlights]
                  updatedHighlights[index].content = e.target.value
                  setHighlights(updatedHighlights)
                }}
              ></textarea>
              <input
                type="number"
                defaultValue={highlight.page}
                onChange={e => {
                  const updatedHighlights = [...highlights]
                  updatedHighlights[index].page = Math.abs(parseInt(e.target.value))
                  setHighlights(updatedHighlights)
                }}
                css={css`
                  float: right;
                `}
              />
              {highlight.cancelSaveVisible && (
                <div css={sortButton}>
                  <button onClick={() => handleCancel(index)}>취소하기</button>
                  <SaveButton onClick={() => handleSave(index)} />
                </div>
              )}
            </>
          ) : (
            // 해당 요소 수정 중이 아닐 때
            <>
              {showHighlight && <SnowmanButton onClick={() => handleEdit(index)} />} {/* 수정&삭제 버튼 */}
              <p>{highlight.content}</p>
              <p>p.{highlight.page}</p>
            </>
          )}
        </div>
      ))}
      {!changeHighlight && // 수정 중이 아닐 때만 + 버튼 표시
        showHighlight && (
          <button css={plus} onClick={handlePlus}>
            +
          </button>
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
    height: 6rem;
    border: none;
    word-wrap: break-word;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-top: -0.5rem;
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
  margin-top: 2rem;
  button {
    width: 8rem;
    font-weight: bold;
    border: 1px solid #947a7a;
    border-radius: 6px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`
