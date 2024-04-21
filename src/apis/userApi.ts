import axios from 'axios'
import { useMutation, useQuery } from 'react-query'

/**회원 로그인 */
export const onLogin = async (data: { email: string; password: string }) => {
  const response = await axios.post('/api/members/login', data)
  return response
}

/**회원가입 */
export const onJoin = async (data: FormData) => {
  const response = await axios.post('/api/members/join', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response
}

/**닉네임 중복 검사 */
export const checkNickname = async (nickname: string) => {
  const response = await axios.post(`/api/members/join-nickname`, null, {
    params: { nickname },
  })
  return response
}

/**회원정보 조회 */
export const useGetUser = (token?: string) => {
  return useQuery(
    ['user', token],
    async () => {
      const { data } = await axios.get('/api/members/me')
      return data
    },
    {
      enabled: !!token,
    },
  )
}

/**회원 정보 (닉네임, 프로필이미지) 수정 */
export const useModifyUser = () => {
  return useMutation(
    async (data: FormData) => {
      const response = await axios.patch(`/api/members/me`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response
    },
    {
      onSuccess: () => {
        alert('회원정보가 수정되었습니다.')
      },
      onError: () => {
        alert('회원정보 수정에 실패했습니다. 잠시후 다시 시도해주세요.')
      },
    },
  )
}

/**로그아웃 */
export const onLogout = async () => {
  const response = await axios.post('/api/members/logout')
  return response
}

/**회원 탈퇴 */
export const onDeleteUser = async (password: string) => {
  const response = await axios.delete('/api/members/me', {
    data: {
      password,
    },
  })
  return response
}

/**이메일 인증 */
export const onSendEmail = async (email: string) => {
  const response = await axios.post('/api/members/send-authCode', { email })
  return response
}

/**이메일과 인증코드 확인 */
export const onCheckEmainAndCode = async (data: { email: string; authCode: string }) => {
  const response = await axios.post('/api/members/verify-authCode', data)
  return response
}

/**이메일로 임시 비밀번호 전송 */
export const onSendTempPassword = async (email: string) => {
  const response = await axios.post('/api/members/send-temporaryPassword', { email })
  return response
}

/**비밀번호 변경 */
export const onChangePassword = async (data: { currentPassword: string; newPassword: string; newPasswordConfirm: string }) => {
  const response = await axios.patch('/api/members/password', data)
  return response
}
