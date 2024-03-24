import { css } from '@emotion/react'

import categories from '../../components/Sample/CategorySample'
import { FeedType } from '../../types/feed'
import { useForm } from 'react-hook-form'

interface BookProp {
  isActive: boolean
  bookInfo?: FeedType[]
}

const BookInput: React.FC<BookProp> = ({ isActive, bookInfo }) => {
  const { register, watch, handleSubmit } = useForm()

  const selectCategory = categories.filter(category => category !== '전체')

  const onSubmit = () => {
    console.log(watch('title'))
    console.log(watch('author'))
    console.log(watch('publisher'))
    console.log(watch('category'))
  }

  return (
    <form css={form} method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <span>제목:</span>
        <input {...register('title')} placeholder={'제목을 입력하세요'} value={isActive ? watch('title') : bookInfo[0].title} readOnly={!isActive} css={isActive ? inputRegister : ''} />
      </div>
      <div>
        <span>지은이:</span>
        <input {...register('author')} placeholder="지은이를 입력하세요" value={isActive ? watch('author') : bookInfo[0].author} readOnly={!isActive} css={isActive ? inputRegister : ''} />
      </div>
      <div>
        <span>출판사:</span>
        <input {...register('publisher')} placeholder="출판사를 입력하세요" value={isActive ? watch('publisher') : bookInfo[0].publisher} readOnly={!isActive} css={isActive ? inputRegister : ''} />
      </div>
      <div>
        <span>카테고리:</span>
        <select defaultValue="" {...register('category')}>
          <option value="" disabled>
            카테고리를 선택하세요
          </option>
          {selectCategory.map((category, id) => (
            <option key={id}>{category}</option>
          ))}
        </select>
      </div>
      <button css={saveButton}>저장하기</button>
    </form>
  )
}

export default BookInput

const form = css`
  display: flex; /* 요소들을 수평으로 정렬 */
  flex-direction: column; /* 요소들을 세로로 배치 */
  text-align: center;
  input {
    width: 13rem;
    font-size: 15px;
    /* font-weight: 700; */
    border: none;
    padding: 0.3rem;
  }
`

const inputRegister = css`
  background: #eae5e5;
`

const saveButton = css`
  /* #836565를 RGBA 색상으로 변환하여 투명도 30%로 설정  */
  background: rgba(131, 101, 101, 0.3);
  width: 20rem;
  height: 2rem;
  border-radius: 6px;
  margin-top: 2rem;
`
