import axios from 'axios'
import { useMutation, useQuery } from 'react-query'

/**회원 로그인 */
export const onLogin = async (data: { email: string; password: string }) => {
  const response = await axios.post('api/members/login', data)
  return response
}

/**회원가입 */
export const onJoin = async (data: FormData) => {
  const response = await axios.post('api/members/join', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response
}

/**닉네임 중복 검사 */
export const checkNickname = async (nickname: string) => {
  const response = await axios.post(`api/members/join-nickname`, null, {
    params: { nickname },
  })
  return response
}

/**회원정보 조회 */
export const useGetUser = () => {
  return useQuery(['user'], async () => {
    const { data } = await axios.get('api/members/me')
    return data
  })
}

/**회원 정보 (닉네임, 프로필이미지) 수정 */
export const useModifyUser = async () => {
  return useMutation(
    async (data: FormData) => {
      const response = await axios.patch(`api/members/me`, data, {
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

/**비밀번호 변경 */
