import { css } from '@emotion/react'

const SaveButton: React.FC = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit} css={saveButton}>
        {/* <form method="PATCH" action={`/api/summaries/${bookId}`} onSubmit={handleSubmit}> */}
        <button onClick={() => console.log('저장하기')}>저장하기</button>
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
