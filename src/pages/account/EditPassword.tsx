import { css } from '@emotion/react'
import { AllLayout } from '../../components/Layouts'
import { calcRem, colors } from '../../styles/theme'

const EditPassword = () => {
  return (
    <AllLayout>
      <div css={container}>
        <p>기존에 사용중인 비밀번호를 입력해주세요.</p>
        <input className="nick_input" type="password" />
        <p>새로운 비밀번호를 입력해주세요.</p>
        <input className="nick_input" type="password" />
        <p>새로운 비밀번호 다시 입력해주세요.</p>
        <input className="nick_input" type="password" />
        <button>변경하기</button>
      </div>
    </AllLayout>
  )
}

export default EditPassword

const container = css`
  margin-top: ${calcRem(35)};
  padding: 1rem;
  border-radius: ${calcRem(6)};
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.boxStroke};

  p {
    margin-top: ${calcRem(10)};
    margin-bottom: ${calcRem(10)};
  }

  input {
    width: ${calcRem(230)};
    background-color: ${colors.innerBoxStroke};
    border: none;
    margin-bottom: ${calcRem(10)};
  }

  button {
    width: 100%;
    padding: ${calcRem(4)};
    border-radius: ${calcRem(6)};
    margin-top: ${calcRem(44)};
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }
`
