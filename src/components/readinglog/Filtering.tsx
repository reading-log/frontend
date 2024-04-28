import { css } from '@emotion/react'
import categories from '../../components/Sample/CategorySample'

interface FilteringProps {
  setCategoryId: (categoryId: number) => void
  selectedCategory: string
  setSelectedCategory: (categoryName: string) => void
  filterName: string
  setFilterName: (filterName: string) => void
}

const Filtering: React.FC<FilteringProps> = ({ setCategoryId, selectedCategory, setSelectedCategory, filterName, setFilterName }) => {
  const handleClick = (categoryName: string, categoryId: number) => {
    setSelectedCategory(categoryName)
    setCategoryId(categoryId)
  }

  return (
    <>
      <div css={categoryBox}>
        <div>
          <span
            onClick={() => setSelectedCategory('전체')}
            css={css`
              font-weight: ${selectedCategory === '전체' ? 'bold' : ''};
            `}
          >
            전체
          </span>
          {categories.map(
            (category, id) =>
              id < 6 && (
                <span
                  key={id}
                  onClick={() => handleClick(category.name, category.categoryId)}
                  css={css`
                    font-weight: ${selectedCategory === category.name ? 'bold' : ''};
                  `}
                >
                  {category.name}
                </span>
              ),
          )}
        </div>
      </div>

      <select value={filterName} onChange={e => setFilterName(e.target.value)}>
        <option value="createdAt">최신순</option>
        <option value="popular">인기순</option>
      </select>
    </>
  )
}

export default Filtering

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
    padding: 0;
    margin: auto;
    span {
      margin-right: 10px;
      float: left;
    }
  }
`
