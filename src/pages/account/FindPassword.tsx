import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { AllLayout } from '../../components/Layouts'
import { calcRem, colors, flexCenter } from '../../styles/theme'

const FindPassword = () => {
  const { register, handleSubmit } = useForm()
  const findPassword = () => {}

  return (
    <AllLayout>
      <form css={container}>
        <p>비밀번호를 찾기 위해서 </p>
        <p>사용하시는 이메일을 입력해주세요.</p>
        <div className="field">
          <p>이메일</p>
          <input className="nick_input" type="text" {...register('email')} />
        </div>
        {true && (
          <>
            <div className="field">
              <p>인증코드</p>
              <input className="nick_input" type="text" {...register('authcode')} />
            </div>
            <p className="code_desc">인증코드가 발송되었습니다. 이메일을 확인해주세요!</p>
          </>
        )}
        <button>확인하기</button>
      </form>
    </AllLayout>
  )
}

export default FindPassword

const container = css`
  margin-top: ${calcRem(35)};
  padding: 1rem;
  border-radius: ${calcRem(6)};
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.boxStroke};
  ${flexCenter};
  flex-direction: column;

  .field {
    display: flex;
    align-items: center;
    margin-top: ${calcRem(35)};

    p {
      margin-right: ${calcRem(6)};
      display: inline-block;
    }

    input {
      width: ${calcRem(230)};
      background-color: ${colors.innerBoxStroke};
      border: none;
    }
  }

  .code_desc {
    margin-top: ${calcRem(10)};
    font-size: ${calcRem(12)};
    color: ${colors.red};
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
