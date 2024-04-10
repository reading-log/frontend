import { css } from '@emotion/react'

import { useForm } from 'react-hook-form'
import { calcRem, colors, flexCenter, title3 } from '../../styles/theme'
import { AllLayout } from '../Layouts'

interface BookProp {
  bookInfo?: {
    title: string
    author: string
    publisher: string
    cover: string
  }
}

const BookInput = ({ bookInfo }: BookProp) => {
  const { register, handleSubmit, watch } = useForm()

  /**이미지 url */
  const bookWatch = watch()

  return (
    <AllLayout>
      <div css={feedContainer}>
        <form>
          <label className="defaultCover" htmlFor="bookCover">
            {bookWatch?.cover?.[0] ? (
              <img src={URL.createObjectURL(bookWatch?.cover?.[0])} />
            ) : (
              <h3>
                Reading
                <br /> Log
              </h3>
            )}
            <input type="file" id="bookCover" accept="image/*" hidden {...register('cover')} />
          </label>
        </form>
        <div className="formText">
          <div className="inputBox">
            <span>제목:</span>
            <input {...register('title')} />
          </div>
          <div className="inputBox">
            <span>지은이:</span>
            <input {...register('author')} />
          </div>
          <div className="inputBox">
            <span>출판사:</span>
            <input {...register('publisher')} />
          </div>
          <div className="inputBox">
            <span>카테고리:</span>
            <select {...register('category')}>
              <option>선택하세요</option>
            </select>
          </div>
        </div>
      </div>
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
