import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useRegisterMyBook } from '../../apis/myLogApi'
import { Layout } from '../../components/Layouts'
import { colors, flexCenter, title3 } from '../../styles/theme'
import { bookCategory } from '../../utils/bookCatergory'

interface IMyLogPostProp {
  title: string
  author: string
  publisher: string
  cover: File[]
  category: string
}

const MyLogPost = () => {
  const { state } = useLocation()
  //자동등록 한 경우 책 정보 담겨있음
  const bookInfo = state?.book

  const { register, handleSubmit, watch } = useForm<IMyLogPostProp>({})

  /**이미지 url */
  const cover = watch('cover')
  const registerBookMutation = useRegisterMyBook()

  /**책 등록 */
  /**책 등록 */
  const onSubmitBook = (data: IMyLogPostProp) => {
    const { title, author, publisher, cover, category } = data

    if (bookInfo) {
      if (!category) {
        return alert('카테고리를 선택해주세요')
      }

      //자동등록
      registerBookMutation.mutate({
        category,
        title: bookInfo.title,
        author: bookInfo.author,
        publisher: bookInfo.publisher,
        cover: bookInfo.cover,
      })
    } else {
      //수동등록
      if (!title || !author || !publisher || !category) {
        return alert('내용을 입력해주세요')
      }

      if (!cover) {
        return alert('커버를 선택해주세요')
      }

      const formData = new FormData()
      formData.append('title', title)
      formData.append('author', author)
      formData.append('publisher', publisher)
      formData.append('category', category)
      formData.append('cover', cover[0])

      registerBookMutation.mutate(formData)
    }
  }

  return (
    <Layout isBack isHeader>
      <div css={myLogPostContainer}>
        <form className="postBox" onSubmit={handleSubmit(onSubmitBook)}>
          <label className="book_cover" htmlFor="bookCover">
            {bookInfo?.cover ? (
              <img src={bookInfo.cover} />
            ) : (
              <>
                {cover?.[0] ? (
                  <img src={URL.createObjectURL(cover?.[0])} />
                ) : (
                  <h3>
                    Reading
                    <br /> Log
                  </h3>
                )}
              </>
            )}
            <input type="file" id="bookCover" accept="image/*" hidden {...register('cover')} />
          </label>
          <div className="inputBox">
            <div className="inputField">
              <span>제목:</span>
              <input {...register('title')} defaultValue={bookInfo?.title} disabled={!!bookInfo} />
            </div>
            <div className="inputField">
              <span>지은이:</span>
              <input {...register('author')} defaultValue={bookInfo?.author} disabled={!!bookInfo} />
            </div>
            <div className="inputField">
              <span>출판사:</span>
              <input {...register('publisher')} defaultValue={bookInfo?.publisher} disabled={!!bookInfo} />
            </div>
            <div className="inputField">
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
          </div>
          <button className="submitBtn" type="submit">
            등록하기
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default MyLogPost

const myLogPostContainer = css`
  margin-top: 3.5rem;
  height: 100vh;
  padding: 1rem;

  .postBox {
    height: 100%;
    border: 2px solid ${colors.boxStroke};
    border-radius: 0.5rem;
    padding: 1rem;

    ${flexCenter};
    flex-direction: column;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  //입력칸
  .inputField {
    display: flex;
    align-items: center;

    span {
      width: 4rem;
      margin-right: 1rem;
    }

    input {
      width: 14rem;
      background-color: ${colors.innerBoxStroke};
      border: none;
    }
    select {
      width: 14rem;
      background-color: ${colors.innerBoxStroke};
      border: none;
    }
  }

  //책 커버
  .book_cover {
    ${flexCenter};
    background-color: ${colors.innerBoxStroke};
    width: 10rem;
    height: 14rem;
    margin-bottom: 2rem;

    border: 2px solid ${colors.main1};

    h3 {
      ${title3};
      text-align: center;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .submitBtn {
    margin-top: 2.5rem;
    width: 100%;
    border-radius: 0.4rem;
    padding: 0.2rem;
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }
`
