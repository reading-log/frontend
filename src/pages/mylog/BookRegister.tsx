import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'

import BookImg from '../../assets/images/book.png'
import BookInput from '../../components/mylog/BookInput'
import { flexCenter } from '../../styles/theme'

const BookRegister = () => {
  return (
    <div>
      <AllLayout>
        <div css={feedContainer}>
          <img
            src={BookImg}
            css={css`
              width: 200px;
            `}
          />
          <BookInput isActive={true} />
        </div>
      </AllLayout>
    </div>
  )
}
export default BookRegister

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
  border: 2px solid #c1b2b2;
  border-radius: 6px;
  padding: 2rem;
  img {
    margin-bottom: 2rem;
  }
`
