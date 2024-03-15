import { css } from '@emotion/react'

const search = css`
  display: flex;
  align-items: center;
  width: 60%;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 25px;
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
    margin-left: auto;
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
