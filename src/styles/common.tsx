import { css } from '@emotion/react'

/**rem 계산기 */
export const calcRem = (size: number) => `${size / 16}rem`

/*정가운데 정렬 */
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
/**타이틀 텍스트1 */
export const title1 = css`
  font-weight: 700;
  font-size: ${calcRem(57)};
  font-family: 'Josefin Slab', sans-serif;
  color: #836565;
`
/**타이틀 텍스트2 */
export const title2 = css`
  font-size: ${calcRem(45)};
  font-weight: 700;
  font-family: 'Josefin Slab', sans-serif;
  color: #836565;
`

/**타이틀 텍스트3 */
export const title3 = css`
  font-size: ${calcRem(27)};
  font-weight: 700;
  font-family: 'Josefin Slab', sans-serif;
  color: #836565;
`

/**본문 텍스트1 */
export const body1 = css`
  font-size: ${calcRem(16)};
  font-weight: 400;
  font-family: 'AppleSDGothicNeo', sans-serif;
`

/**본문 텍스트2 */
export const body2 = css`
  font-size: ${calcRem(14)};
  font-weight: 400;
  font-family: 'AppleSDGothicNeo', sans-serif;
`

/**본문 텍스트3 */
export const body3 = css`
  font-size: ${calcRem(12)};
  font-weight: 400;
  font-family: 'AppleSDGothicNeo', sans-serif;
`

/**색상 컬러 */
export const colors = {
  main1: '#836565',
  bg1: '#EAE5E5',
  bg2: '#F3F0F0',
  black: '#000000',
  gray: '#8C8C8C',
  red: '#F14E4E',
}
