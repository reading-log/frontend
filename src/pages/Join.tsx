import { css } from '@emotion/react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { checkNickname, onJoin } from '../apis/userApi'
import { HeaderLayout } from '../components/Layouts'
import { useToken } from '../hooks/useToken'
import { calcRem, colors, flexCenter } from '../styles/theme'
import NotAllow from './NotAllow'

interface IFormValues {
  profileImage: File[]
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

const Join = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<IFormValues>()

  /**이미지 url */
  const profileImage = watch('profileImage')
  /**닉네임 검사 */
  const watchNickname = watch('nickname')

  /**닉네임 중복 검사(포커스 아웃시) */
  const onCheckNickname = () => {
    if (!!watchNickname) {
      //중복검사
      checkNickname(watchNickname).catch(() => {
        setError('nickname', {
          type: 'validate',
          message: '이미 존재하는 닉네임입니다.',
        })
      })
    }
  }

  const onHandleJoin = (data: IFormValues) => {
    const formData = new FormData()

    /** formdata에 추가 */
    for (const [key, value] of Object.entries(data)) {
      if (key === 'profileImage') {
        // 값이 있을때만 추가
        value[0] && formData.append(key, value[0])
      } else {
        formData.append(key, value)
      }
    }

    onJoin(formData)
      .then(() => {
        alert('회원가입이 완료되었습니다.')
        navigate('/login')
      })
      .catch(res => {
        if (res.response.data.code === 409) {
          return alert('이미 존재하는 계정 또는 닉네임입니다. ')
        }
        alert('회원가입에 실패했습니다. 잠시후 다시 시도해주세요.')
      })
  }

  /**로그인 되어있으면 리턴 */
  const isLogin = useToken()
  if (isLogin) return <NotAllow />

  return (
    <HeaderLayout>
      <form css={container} onSubmit={handleSubmit(onHandleJoin)}>
        <p>이메일로 회원가입하기</p>
        <label css={profileImgBox} htmlFor="profile_img">
          {profileImage?.[0] ? <img src={URL.createObjectURL(profileImage?.[0])} /> : <FontAwesomeIcon size="3x" icon={faUser} color="#ffffff" />}
          <input type="file" accept="image/*" id="profile_img" {...register('profileImage')} />
        </label>
        <div css={joinBox}>
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력해주세요."
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: '이메일 형식이 올바르지 않습니다.',
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="nickname"
              id="nickname"
              maxLength={8}
              placeholder="닉네임을 입력해주세요."
              {...register('nickname', {
                required: '닉네임을 입력해주세요.',
                maxLength: {
                  value: 8,
                  message: '닉네임은 8자 이내로 입력해주세요.',
                },
                pattern: {
                  value: /^[a-zA-Z0-9가-힣]{2,8}$/,
                  message: '닉네임은 영문, 한글, 숫자만 입력해주세요.',
                },
                onBlur: () => onCheckNickname(),
              })}
            />
            {errors.nickname && <span>{errors.nickname.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              maxLength={20}
              placeholder="비밀번호를 입력해주세요."
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
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
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="field">
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호를 한번 더 입력해주세요."
              {...register('passwordConfirm', {
                required: '비밀번호를 한번 더 입력해주세요.',
                validate: value => value === watch('password') || '비밀번호가 일치하지 않습니다.',
              })}
            />
            {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
          </div>
          <button className="btn1" type="submit">
            회원가입
          </button>
          <button className="btn2" type="button" onClick={() => navigate('/login')}>
            돌아가기
          </button>
        </div>
      </form>
    </HeaderLayout>
  )
}

export default Join

const container = css`
  ${flexCenter}
  flex-direction: column;
  p {
    margin-top: ${calcRem(18)};
    margin-bottom: ${calcRem(14)};
  }
`
/**프로필 사진 박스 */
const profileImgBox = css`
  width: ${calcRem(100)};
  height: ${calcRem(100)};
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: ${calcRem(30)};
  background-color: ${colors.main1};
  ${flexCenter};
  span {
    font-size: ${calcRem(14)};
    font-weight: 500;
    color: ${colors.gray};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`

/**회원가입 박스 */
const joinBox = css`
  ${flexCenter}
  flex-direction: column;
  .field {
    margin-bottom: ${calcRem(13)};
    display: flex;
    flex-direction: column;
  }

  input {
    border: 2px solid ${colors.main1};
    width: ${calcRem(300)};
    height: ${calcRem(33)};
  }

  label {
    margin-bottom: ${calcRem(3)};
  }

  span {
    color: ${colors.red};
    margin-top: ${calcRem(3)};
    font-size: ${calcRem(12)};
  }

  button {
    width: ${calcRem(300)};
    height: ${calcRem(33)};

    &.btn1 {
      margin-top: ${calcRem(23)};
      color: #ffffff;
      background-color: ${colors.main1};
    }

    &.btn2 {
      margin-top: ${calcRem(11)};
      border: 2px solid ${colors.main1};
      color: ${colors.main1};
      background-color: ${colors.innerBoxStroke};
    }
  }
`
