import { css } from '@emotion/react'
import { Layout } from '../components/Layouts'

const ReadingLogChart = () => {
  return (
    <Layout isFooter>
      <div css={chartContainer}>리딩로그 차트</div>
    </Layout>
  )
}

export default ReadingLogChart

const chartContainer = css`
  background-color: aquamarine;
`
