import { css } from '@emotion/react'

import { useForm } from 'react-hook-form'
import { useRegisterMyBook } from '../../apis/myLogApi'
import { calcRem, colors, flexCenter, title3 } from '../../styles/theme'
import { bookCategory } from '../../utils/bookCatergory'
import { AllLayout } from '../Layouts'

interface BookProp {
  title: string
  author: string
  publisher: string
  cover?: string | FileList
}

interface BookInputProp extends BookProp {
  category: string
}

const BookInput = ({ bookInfo }: { bookInfo?: BookProp }) => {
  const { register, handleSubmit, watch } = useForm<BookInputProp>({})

  /**이미지 url */
  const cover = watch('cover')

  const registerBookMutation = useRegisterMyBook()

  /**책 등록 */
  const onSubmitBook = (data: BookInputProp) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('author', data.author)
    formData.append('publisher', data.publisher)
    formData.append('category', data.category)
    formData.append('cover', data.cover[0] ?? bookInfo?.cover)
    registerBookMutation.mutate(formData)
  }

  return (
    <AllLayout>
      <form css={feedContainer} onSubmit={handleSubmit(onSubmitBook)}>
        <label className="defaultCover" htmlFor="bookCover">
          {bookInfo?.cover || cover?.[0] ? (
            <img src={cover?.[0] ? URL.createObjectURL(cover?.[0]) : bookInfo?.cover} />
          ) : (
            <h3>
              Reading
              <br /> Log
            </h3>
          )}
          <input type="file" id="bookCover" accept="image/*" hidden {...register('cover')} />
        </label>
        <div className="inputBox">
          <span>제목:</span>
          <input {...register('title')} defaultValue={bookInfo?.title} />
        </div>
        <div className="inputBox">
          <span>지은이:</span>
          <input {...register('author')} defaultValue={bookInfo?.author} />
        </div>
        <div className="inputBox">
          <span>출판사:</span>
          <input {...register('publisher')} defaultValue={bookInfo?.publisher} />
        </div>
        <div className="inputBox">
          <span>카테고리:</span>
          <select {...register('category')}>
            <option value="">선택</option>
            {bookCategory.map((category, id) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="submitBtn" type="submit">
          등록하기
        </button>
      </form>
    </AllLayout>
  )
}

export default BookInput

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: calc(100vh - 12rem);
  border: 2px solid #c1b2b2;
  border-radius: 6px;
  padding: 2rem;

  .defaultCover {
    h3 {
      ${title3}
      text-align: center;
    }
    ${flexCenter}
    background-color: ${colors.innerBoxStroke};
    width: ${calcRem(160)};
    height: ${calcRem(190)};
    border: 2px solid ${colors.main1};
    margin-bottom: 4rem;

    img {
      height: 100%;
      max-width: ${calcRem(160)};
      max-height: ${calcRem(190)};
    }
  }

  .submitBtn {
    margin-top: ${calcRem(40)};
    width: 100%;
    padding: ${calcRem(4)};
    border-radius: ${calcRem(6)};
    margin-bottom: ${calcRem(3)};
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }

  .inputBox {
    font-weight: 500;
    font-size: ${calcRem(15)};
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;

    span {
      display: flex;
      width: 4rem;
      justify-content: flex-end;
      margin-right: 2rem;
    }
    input {
      width: 10rem;
      background-color: ${colors.innerBoxStroke};
      border: none;
    }
    select {
      width: 10rem;
      background-color: ${colors.innerBoxStroke};
      border: none;
    }
  }
`
