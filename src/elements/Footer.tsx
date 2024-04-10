import { css } from '@emotion/react'
import { faBook, faBookOpen, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { colors } from '../styles/theme'

const Footer = () => {
  const menuList = [
    {
      title: '리딩로그',
      url: '/readinglog',
      icon: faBookOpen,
    },
    {
      title: '나의로그',
      url: '/mylog',
      icon: faBook,
    },
    {
      title: '로그분석',
      url: '/log-analysis',
      icon: faChartSimple,
    },
    {
      title: '계정',
      url: '/account',
      icon: faGear,
    },
  ]

  return (
    <div css={footerBox}>
      {menuList.map((menu, id) => (
        <div css={footerCon} key={id}>
          <NavLink to={menu.url} className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={menu.icon} size="2x" />
            <p>{menu.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Footer

/*전체 블록 */
const footerBox = css`
  width: 100%;
  max-width: 26rem;
  height: 5rem;
  background-color: #f3f0f0;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`

/*아이콘 버튼 */
const footerCon = css`
  text-align: center;
  width: 5rem;
  margin-bottom: 0.6rem;
  color: #cec2c2;

  .active {
    color: ${colors.main1};
  }

  p {
    margin-top: 0.5rem;
  }
`
