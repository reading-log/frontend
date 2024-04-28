import { css } from '@emotion/react'
import { Layout } from '../../components/Layouts'

const ReadinglogFeed = () => {
  return (
    <Layout isFooter isHeader>
      <div css={feedContainer}>리딩로그 피드</div>
    </Layout>
  )
}

export default ReadinglogFeed

const feedContainer = css`
  margin-top: 3.5rem;
  background-color: aquamarine;
`
