// import { css } from '@emotion/react'
import BackButton from '../components/BackButton'
import Search from '../components/Search'
import Title from '../components/Title'

const ReadingLog = () => {
  return (
    <div>
      <Title />
      <BackButton />
      <Search placeholder="책 제목으로 검색하기" />
    </div>
  )
}

export default ReadingLog
