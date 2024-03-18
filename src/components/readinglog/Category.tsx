import { css } from '@emotion/react'
import categories from '../Sample/Sample'
// import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const categoryBox = css`
  display: flex;
  align-items: center;
  background-color: #f3f0f0;
  width: 80%;
  height: 33px;
  border-radius: 6px;
  margin-bottom: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: auto;
    li {
      margin-right: 10px;
      float: left;
    }
  }
`

const Category = () => {
  return (
    <div css={categoryBox}>
      <ul>{categories.map((list, id) => id < 4 && <li key={id}>{list}</li>)}</ul>
    </div>
  )
}

export default Category
