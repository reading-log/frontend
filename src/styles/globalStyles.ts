import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
  }

  div {
    /* background: silver; */
    width: 393px;
    height: 100vh;
    margin: auto;
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`
