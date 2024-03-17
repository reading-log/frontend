import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const menuList = [
    {
      title: '리딩로그',
      url: '/readinglog',
      icon: 'home',
    },
    {
      title: '나의로그',
      url: '/mylog',
      icon: 'home',
    },
    {
      title: '로그분석',
      url: '/log-analysis',
      icon: 'home',
    },
    {
      title: '계정',
      url: '/account',
      icon: 'home',
    },
  ]

  return (
    <div css={footerBox}>
      {menuList.map((menu, id) => (
        <div css={footerCon} key={id}>
          <NavLink to={menu.url} className={({ isActive }) => (isActive ? 'active' : '')}>
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
  height: 4rem;
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
  color: #526161;

  .active {
    font-weight: 800;
  }
`
