import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  const backBtn = css`
    margin-left: 5%;
  `

  return (
    <>
      <span css={backBtn}>
        <Link to="/">
          <img src="../assets/images/뒤로가기버튼.png" />
        </Link>
      </span>
    </>
  )
}

export default BackButton
