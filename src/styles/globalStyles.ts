import { css } from '@emotion/react'

export const globalStyles = css`
  #root {
    width: 100%;
    max-width: 26rem;
    height: 100vh;
    margin: auto;
    position: relative;
    background-color: #fcfcfb;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #000000;
    margin: 0;

    /*웹 배경 이미지색 맞추기*/
    background-color: #f4f5f4;
    /*단어 넘치면 쪼개기*/
    word-break: break-all;
    /* 드래그 방지 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /*텍스트 줄 높이*/
    line-height: normal;
  }

  @media all and (min-width: 360px) and (max-width: 899px) {
    body {
      /*웹 배경 이미지색 맞추기*/
      background-color: #f4f5f4;
    }

    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }

  /*배경이미지보고 다시 조정하기*/
  @media all and (min-width: 900px) and (min-height: 500px) {
    body {
      background: url('/backgroud.jpg') no-repeat center;
      background-color: #f4f5f4;
      background-size: contain;
    }
  }

  /*엘리먼트 전체 적용*/
  * {
    box-sizing: border-box;
    resize: none;
    /* 인풋 포커스 해제 */
    &:focus {
      outline: none;
    }
    /*스크롤바 숨기기*/
    &::-webkit-scrollbar {
      display: none;
    }
  }

  textarea {
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
  }

  /*버튼 배경제거, 테두리 제거 */
  button {
    background: none;
    border: none;
    color: #002020;
    cursor: pointer;
  }

  /* a 태그의 밑줄을 없애고 누르면 보라색으로 변하는걸 빼줌 */
  a {
    text-decoration: none;
    color: inherit;
  }

  /**css reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
