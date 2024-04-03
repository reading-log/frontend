import { css } from '@emotion/react'
import { body2, calcRem, colors, flexCenter } from '../../styles/theme'

const MyBook = () => {
  return (
    <div css={myBookBox}>
      <div>
        <img src="https://www.theyoungtimes.com/news/photo/202206/869_1682_3518.jpg" alt="책이미지" />
      </div>
      <p>책제목</p>
      <span>지은이</span>
    </div>
  )
}

export default MyBook

const myBookBox = css`
  border: 1px solid ${colors.boxStroke};
  border-radius: 0.5rem;
  ${flexCenter};

  flex-direction: column;
  background-color: ${colors.boxFill};
  width: ${calcRem(154)};
  height: ${calcRem(172)};
  img {
    max-width: ${calcRem(70)};
    max-height: ${calcRem(88)};
  }
  p {
    margin-top: ${calcRem(12)};
    margin-bottom: ${calcRem(8)};
  }
  span {
    ${body2};
  }
`
