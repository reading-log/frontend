import { css } from '@emotion/react'
import categoriesArray from './Sample/Sample'

const category = css`
  display: flex;
  align-items: center;
  background-color: #f3f0f0;
  width: 80%;
  height: 33px;
  border-radius: 6px;
  margin-bottom: 20px;
  ul {
    list-style: none;
    li {
      margin-right: 10px;
      float: left;
    }
  }
`
const Category = () => {
  return (
    <div css={category}>
      <ul>
        <li>전체</li>
        {categoriesArray.map((list, id) => id < 3 && <li key={id}>{list}</li>)}
      </ul>
    </div>
  )
}

export default Category
