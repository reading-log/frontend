import { css } from '@emotion/react'
import { body1, body3, colors } from '../../../styles/theme'
import { IBookInfo } from '../../../types/book'

const BookInfo = ({ bookData }: { bookData: IBookInfo }) => {
  return (
    <div css={bookInfoBox}>
      <img src={bookData?.cover} />
      <div className="bookInfo">
        <div>
          <p className="bookName">{bookData?.title}</p>
          <p>{bookData?.author}</p>
        </div>
        <div>
          <p>출판사 : {bookData?.publisher}</p>
          <p>카테고리 : {bookData?.category}</p>
        </div>
      </div>
    </div>
  )
}

export default BookInfo

const bookInfoBox = css`
  padding: 1rem;
  display: flex;
  img {
    max-width: 6rem;
    max-height: 8rem;
    width: 100%;
    height: 100%;
    margin-right: 1.5rem;
    background-color: ${colors.main1};
  }
  .bookInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 12.5rem;
    ${body3};
    line-height: 1rem;

    .bookName {
      ${body1};
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`
