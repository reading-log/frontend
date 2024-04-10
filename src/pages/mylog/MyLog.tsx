import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import MyBook from '../../components/mylog/MyBook'
import { RecordBtn } from '../../elements/Buttons'
import SearchBar from '../../elements/SearchBar'
import { calcRem, flexCenter } from '../../styles/theme'

const MyLog = () => {
  return (
    <>
      <AllLayout>
        {true ? (
          <EmptyMylog />
        ) : (
          <div css={myLogContainer}>
            <div className="mylogList">
              <SearchBar placeHolder="나의로그 검색하기" />
              {['1', '2', '4', '1', '2', '4', '1', '2', '4', '1', '2', '4'].map((book, index) => (
                <MyBook key={index} />
              ))}
            </div>
          </div>
        )}
      </AllLayout>
      <RecordBtn text="기록하기" path="/mylog/search" />
    </>
  )
}
export default MyLog

const myLogContainer = css`
  ${flexCenter};
  .mylogList {
    margin-top: ${calcRem(50)};
    display: grid;
    justify-items: center;
    gap: ${calcRem(15)};
    grid-template-columns: 1fr 1fr;
  }
`
