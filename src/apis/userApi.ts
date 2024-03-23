import axios from 'axios'

/**회원 로그인 */
export const onLogin = async (data: { email: string; password: string }) => {
  const response = await axios.post('api/members/login', data)
  return response
}
