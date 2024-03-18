import { css } from '@emotion/react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const search = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 30px;
  margin: auto;
  margin-bottom: 25px;
  position: relative;
  input {
    background: transparent;
    width: 100%;
    height: 30px;
    text-align: center;
    border: 2px solid #836565;
    position: absolute;
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-left: auto;
    img {
    }
  }
`

type PlaceholderProp = {
  placeholder: string
}
// type FieldValues = {
//   [key: string]: string
// }

const Search: React.FC<PlaceholderProp> = ({ placeholder }) => {
  const { register, handleSubmit } = useForm()

  const onValid: SubmitHandler<FieldValues> = data => {
    console.log(data)
  }
  return (
    <>
      <form css={search} onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register('title')} placeholder={placeholder} />
        <button type="submit">
          <img src="../assets/images/돋보기.png" alt="Search" />
        </button>
      </form>
    </>
  )
}

export default Search
