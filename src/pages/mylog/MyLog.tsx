import { css } from '@emotion/react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import MyBook from '../../components/mylog/MyBook'
import SearchBar from '../../elements/SearchBar'
import { body1, calcRem, colors, flexCenter } from '../../styles/theme'

const MyLog = () => {
  const navigate = useNavigate()
  // const { data, isLoading, isError } = getMyBookList()

  /**기록하기로 이동 */
  const handleClick = () => {
    navigate('/mylog/search') //  나의로그 책 검색하기
  }

  return (
    <>
      <AllLayout>
        {false ? (
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
      <div css={writeButton}>
        <span>기록하기</span>
        <button className="btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faPencil} size="xl" color={colors.main1} />
        </button>
      </div>
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

const writeButton = css`
  position: fixed;
  bottom: 5rem;
  right: 1rem;

  @media (min-width: 450px) {
    position: absolute;
    bottom: 5rem;
    right: 1rem;
  }

  display: flex;
  align-items: center;

  span {
    ${body1};
    color: ${colors.main1};
    margin-top: ${calcRem(10)};
    margin-right: ${calcRem(10)};
  }

  .btn {
    ${flexCenter};
    width: ${calcRem(47)};
    height: ${calcRem(47)};
    background-color: ${colors.button2};
    border: 1px solid ${colors.button1};
    border-radius: 50%;
  }
`
