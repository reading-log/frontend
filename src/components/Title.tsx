import { css } from '@emotion/react'

/* 회원가입 & 리딩로그 & 나의 로그 => title 적용 */
const title = css`
  font-family: 'Josefin Slab', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #836565;
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
`

const Title = () => {
  return <h1 css={title}>ReadingLog</h1>
}

export default Title
