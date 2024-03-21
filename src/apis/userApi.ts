import axios from 'axios'

export const onLogin = async (data: { email: string; password: string }) => {
  const response = await axios.post('/api/members/join', data)
  return response
}
