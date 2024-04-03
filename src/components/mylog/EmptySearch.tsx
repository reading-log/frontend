import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const EmptySearch = () => {
  return (
    <div css={searchContainer}>
      <h1>검색 결과가 없습니다.</h1>
      <div className="img">이미지</div>
      <Link to="/mylog/book_register">️✍️ 직접 기록하기 ✍</Link>
    </div>
  )
}

export default EmptySearch

const searchContainer = css`
  ${flexCenter}
  flex-direction: column;
  margin-top: ${calcRem(50)};

  position: absolute;
  inset: 0;

  .img {
    width: ${calcRem(200)};
    height: ${calcRem(200)};
    background-color: #c9c9c9;
  }

  h1 {
    margin-bottom: 1rem;
  }

  a {
    margin-top: 3rem;
    color: ${colors.main1};
    font-weight: 700;
  }
`
