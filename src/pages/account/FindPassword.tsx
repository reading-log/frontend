import { css } from '@emotion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onCheckEmainAndCode, onSendEmail, onSendTempPassword } from '../../apis/userApi'
import { AllLayout } from '../../components/Layouts'
import { calcRem, colors, flexCenter } from '../../styles/theme'

interface IFormValues {
  email: string
  authcode: string
}

const FindPassword = () => {
  const { register, handleSubmit } = useForm<IFormValues>()

  /**이메일인증 여부 */
  const [isAuth, setIsAuth] = useState(false)

  const findPassword = (data: IFormValues) => {
    if (!isAuth) {
      //이메일 인증 => 인증코드 발송
      onSendEmail(data.email)
        .then(() => {
          alert('인증코드가 발송되었습니다. 메일함을 확인해주세요.')
          setIsAuth(true)
        })
        .catch(() => {
          alert('이메일을 다시 확인해주세요.')
        })
    } else {
      //이메일, 인증코드 확인
      if (data.authcode === '') return alert('인증코드를 입력해주세요.')
      onCheckEmainAndCode({
        email: data.email,
        authCode: data.authcode,
      })
        .then(() => {
          //임시 비밀번호 발송
          onSendTempPassword(data.email)
            .then(() => alert('인증된 이메일로 임시 비밀번호를 발송합니다.'))
            .catch(() => alert('임시 비밀번호 발송에 실패했습니다. 다시 시도해주세요.'))
        })
        .catch(() => {
          alert('인증코드가 일치하지 않습니다.')
        })
    }
  }

  return (
    <AllLayout>
      <form css={container} onSubmit={handleSubmit(findPassword)}>
        <p>비밀번호를 찾기 위해서 </p>
        <p>사용하시는 이메일을 입력해주세요.</p>
        <div className="field">
          <p>이메일</p>
          <input
            className="nick_input"
            type="text"
            {...register('email', {
              required: '이메일을 입력해주세요.',
            })}
          />
        </div>
        {isAuth && (
          <>
            <div className="field">
              <p>인증코드</p>
              <input className="nick_input" type="text" {...register('authcode')} />
            </div>
            <p className="code_error"> Gmail을 사용하시는 경우, 이메일이 스팸 폴더로 분류될 수 있습니다. 메일을 받지 못하신 경우 스팸 폴더도 확인해주세요.</p>
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

  .code_error {
    margin-top: ${calcRem(10)};
    color: ${colors.main1};
    font-size: ${calcRem(12)};
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
