import { css } from '@emotion/react'
import { colors, flexCenter } from '../../styles/theme'

const EmptyMylog = () => {
  return (
    <div css={container}>
      <div className="image">이미지</div>
    </div>
  )
}

export default EmptyMylog

const container = css`
  height: calc(100vh - 10rem);
  ${flexCenter}
  flex-direction: column;

  .image {
    width: 120px;
    height: 120px;
    background-color: #c5c5c5;
    margin-bottom: 8rem;
  }

  button {
    font-weight: 700;
    color: ${colors.main1};
  }
`
