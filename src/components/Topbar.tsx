import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

/* 회원가입 & 리딩로그 & 나의 로그 적용 */
const topbar = css`
  width: 393px;
  height: auto;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 15px;
  background: #ffff;
  top: 0px;
  position: fixed;
`
const title = css`
  font-family: 'Josefin Slab', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 27px;
  font-weight: bold;
  color: #836565;
  margin-left: -38px;
`

const backBtn = css`
  float: left;
  margin-left: 5%;
`

const Topbar = () => {
  return (
    <div css={topbar}>
      <Link to="/" css={backBtn}>
        <img src="../assets/images/뒤로가기버튼.png" />
      </Link>
      <span css={title}>ReadingLog</span>
    </div>
  )
}

export default Topbar
