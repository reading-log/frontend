/**rem 계산기 */
export const calcRem = (size: number) => `${size / 16}rem`

/**테마 설정 */
export const theme = {
  colors: {
    main1: '#836565',
    bg1: '#EAE5E5',
    bg2: '#F3F0F0',
    black: '#000000',
    gray: '#8C8C8C',
    red: '#F14E4E',
  },
  fonts: {
    title1: {
      'font-size': calcRem(57),
      'font-weight': 700,
      'font-family': 'Josefin Slab, sans-serif',
      color: '#836565',
    },
    title2: {
      'font-size': calcRem(45),
      'font-weight': 700,
      'font-family': 'Josefin Slab, sans-serif',
      color: '#836565',
    },
    title3: {
      'font-size': calcRem(27),
      'font-weight': 700,
      'font-family': 'Josefin Slab. sans-serif',
      color: '#836565',
    },
    body1: {
      'font-size': calcRem(16),
      'font-weight': 400,
      'font-family': 'AppleSDGothicNeo, sans-serif',
    },
    body2: {
      'font-size': calcRem(14),
      'font-weight': 400,
      'font-family': 'AppleSDGothicNeo, sans-serif',
    },
    body3: {
      'font-size': calcRem(12),
      'font-weight': 400,
      'font-family': 'AppleSDGothicNeo, sans-serif',
    },
  },
}
