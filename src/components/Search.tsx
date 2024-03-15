import { css } from '@emotion/react'

const search = css`
  width: 240px;
  height: 30px;
  margin-top: 30px;
  position: relative;
  input {
    background: transparent;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 1px solid #836565;
    position: absolute;
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }
  img {
    float: right;
    margin-top: 7px;
  }
`

type PlaceholderProp = {
  placeholder: string
}

const Search: React.FC<PlaceholderProp> = ({ placeholder }) => {
  return (
    <div css={search}>
      <input type="text" placeholder={placeholder} />
      <img src="../assets/images/돋보기.png" />
    </div>
  )
}

export default Search
