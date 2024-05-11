import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { body1, body3, colors } from '../../styles/theme'
import { TBookLog } from '../../types/book'
import BookUserInfo from './BookUserInfo'

const ReadingBook = ({ booklog }: { booklog: TBookLog }) => {
  const navigate = useNavigate()
  return (
    <div css={bookLayout}>
      <BookUserInfo likeCount={booklog?.likeCount} nickname={booklog?.nickname} id={booklog?.id} />
      <div
        css={bookInfoBox}
        onClick={() =>
          navigate(`/readinglog/${booklog.bookId}/${booklog.memberId}`, {
            state: {
              likeCount: booklog.likeCount,
              nickname: booklog.nickname,
              id: booklog.id,
            },
          })
        }
      >
        <img src={booklog?.bookCover} />
        <div className="bookInfo">
          <div>
            <p className="bookName">{booklog?.bookTitle}</p>
            <p>{booklog?.bookAuthor}</p>
          </div>
          <div>
            <p>{booklog?.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingBook

const bookLayout = css`
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid ${colors.boxStroke};
`

const bookInfoBox = css`
  padding: 1rem;
  display: flex;
  img {
    min-width: 3rem;
    min-height: 4rem;
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
