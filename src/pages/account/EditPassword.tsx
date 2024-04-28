import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { onChangePassword } from '../../apis/userApi'
import { Layout } from '../../components/Layouts'
import { body3, colors, flexCenter } from '../../styles/theme'

interface IEditPasswordValues {
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
  } = useForm<IEditPasswordValues>()

  /**비밀번호 변경하기 */
  const onEditPassword = (data: IEditPasswordValues) => {
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
    <Layout isFooter>
      <div css={EditContainer}>
        <form className="formBox" onSubmit={handleSubmit(onEditPassword)}>
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
          <div className="btnBox">
            <button className="cancle_btn" type="button" onClick={() => navigate('/account')}>
              취소하기
            </button>
            <button className="edit_btn" type="submit">
              확인하기
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default EditPassword

const EditContainer = css`
  padding: 1rem;
  height: 26rem;

  .formBox {
    width: 100%;

    border: 2px solid ${colors.boxStroke};
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .field {
    display: flex;
    flex-direction: column;

    p {
      margin-top: 0.5rem;
      margin-bottom: 0.8rem;
    }

    input {
      width: 16rem;
      background-color: ${colors.innerBoxStroke};
      border: none;
      margin-bottom: 0.5rem;
    }
    span {
      color: ${colors.red};
      ${body3};
    }
  }

  .btnBox {
    ${flexCenter};
    flex-direction: column;
    gap: 0.5rem;

    button {
      width: 100%;
      padding: 0.2rem;
      border-radius: 0.5rem;
    }
  }

  .cancle_btn {
    margin-top: 3rem;
    border: 2px solid ${colors.button2};
  }
  .edit_btn {
    background-color: ${colors.button2};
    border: 2px solid ${colors.button1};
  }
`
