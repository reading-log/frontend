import { css } from '@emotion/react'

type SaveBtn = {
  onClick: () => void
}
const SaveButton: React.FC<SaveBtn> = ({ onClick }) => {
  const handleSave = () => {
    onClick && onClick() // 해당 요소만 저장
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()} css={saveButton}>
        {/* 서버 연결되면 주석 해제하기 */}
        {/* <form method="PATCH" action={`/api/summaries/${bookId}`} onSubmit={handleSubmit}> */}
        <button onClick={handleSave}>저장하기</button>
      </form>
    </>
  )
}

export default SaveButton

const saveButton = css`
  display: inline-block;
  float: right;
  button {
    background: #dad1d1;
  }
`
