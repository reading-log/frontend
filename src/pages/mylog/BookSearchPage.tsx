import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import BookSearch from '../../components/mylog/BookSearch'
import { flexCenter } from '../../styles/common'

const Record = () => {
  return (
    <>
      <AllLayout>
        <div css={feedContainer}>
          <BookSearch placeholder="책 검색하기" />
        </div>
      </AllLayout>
    </>
  )
}

export default Record

const feedContainer = css`
  ${flexCenter}
  flex-direction: column;
  height: 100%;
`
