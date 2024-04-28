import { css } from '@emotion/react'
import { Layout } from '../../components/Layouts'

const LikeFeed = () => {
  return (
    <Layout isBack isHeader>
      <div css={likeContainer}>좋아요한 피드</div>
    </Layout>
  )
}

export default LikeFeed

const likeContainer = css`
  margin-top: 3.5rem;
`
