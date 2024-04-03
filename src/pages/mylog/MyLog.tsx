import { css } from '@emotion/react'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { AllLayout } from '../../components/Layouts'
import EmptyMylog from '../../components/mylog/EmptyMylog'
import SearchBar from '../../elements/SearchBar'
import { body1, body2, calcRem, colors, flexCenter } from '../../styles/theme'

const MyLog = () => {
  const navigate = useNavigate()
  // const { data, isLoading, isError } = getMyBookList()

  /**기록하기로 이동 */
  const handleClick = () => {
    navigate('/mylog/search-books') //  나의로그 책 검색하기
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
                <div className="bookBox" key={index}>
                  <div>
                    <img src="https://www.theyoungtimes.com/news/photo/202206/869_1682_3518.jpg" alt="책이미지" />
                  </div>
                  <p>책제목</p>
                  <span>지은이</span>
                </div>
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

  .bookBox {
    border: 1px solid ${colors.boxStroke};
    border-radius: 0.5rem;
    ${flexCenter};

    flex-direction: column;
    background-color: ${colors.boxFill};
    width: ${calcRem(154)};
    height: ${calcRem(172)};
    img {
      max-width: ${calcRem(70)};
      max-height: ${calcRem(88)};
    }
    p {
      margin-top: ${calcRem(12)};
      margin-bottom: ${calcRem(8)};
    }
    span {
      ${body2};
    }
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
