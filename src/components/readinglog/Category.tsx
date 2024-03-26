import { css } from '@emotion/react'
import categories from '../Sample/CategorySample'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div css={categoryBox}>
      <div>
        {categories.map(
          (category, id) =>
            id < 6 && (
              <Link key={id} to={category === '전체' ? '/readinglog/allType' : `/readinglog/${category}`}>
                <strong>{category}</strong>
              </Link>
            ),
        )}
      </div>
    </div>
  )
}
export default Category

const categoryBox = css`
  display: flex;
  align-items: center;
  background-color: #f3f0f0;
  width: 80%;
  height: 33px;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 15px;
  div {
    list-style: none;
    padding: 0;
    margin: auto;
    a {
      margin-right: 10px;
      float: left;
    }
  }
`
