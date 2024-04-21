import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { onChangePassword } from '../../apis/userApi'
import { AllLayout } from '../../components/Layouts'
import { calcRem, colors } from '../../styles/theme'

interface IFormValues {
  currentPassword: string
  newPassword: string
  newPasswordConfirm: string
}

const EditPassword = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormValues>()

  /**비밀번호 변경하기 */
  const onEditPassword = (data: IFormValues) => {
    onChangePassword(data)
      .then(() => {
        alert('비밀번호가 변경되었습니다.')
        navigate('/account')
      })
      .catch(() => {
        alert('비밀번호 변경에 실패했습니다. 비밀번호를 다시 확인해주세요.')
      })
  }
  return (
    <AllLayout>
      <form css={container} onSubmit={handleSubmit(onEditPassword)}>
        <div className="field">
          <p>기존에 사용중인 비밀번호를 입력해주세요.</p>
          <input
            className="nick_input"
            type="password"
            {...register('currentPassword', {
              required: '비밀번호를 입력해주세요.',
            })}
          />
          {errors.currentPassword && <span>{errors.currentPassword.message}</span>}
        </div>
        <div className="field">
          <p>새로운 비밀번호를 입력해주세요.</p>
          <input
            className="nick_input"
            type="password"
            {...register('newPassword', {
              required: '새로운 비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이내로 입력해주세요.',
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: '영문 대/소문자, 숫자, 특수문자를 모두 포함해주세요.',
              },
            })}
          />
          {errors.newPassword && <span>{errors.newPassword.message}</span>}
        </div>
        <div className="field">
          <p>새로운 비밀번호 다시 입력해주세요.</p>
          <input
            className="nick_input"
            type="password"
            {...register('newPasswordConfirm', {
              required: '비밀번호를 한번 더 입력해주세요.',
              validate: value => value === watch('newPassword') || '비밀번호가 일치하지 않습니다.',
            })}
          />
          {errors.newPasswordConfirm && <span>{errors.newPasswordConfirm.message}</span>}
        </div>
        <button>변경하기</button>
      </form>
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

  button {
    width: 100%;
    padding: ${calcRem(4)};
    border-radius: ${calcRem(6)};
    margin-top: ${calcRem(44)};
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }

  .field {
    display: flex;
    flex-direction: column;

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
    span {
      color: ${colors.red};
      font-size: ${calcRem(12)};
    }
  }
`
