import axios from 'axios'
import { API_BASE_URL } from './api'

export const axiosSearchResult = async (searchKeyword: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/search?q=${searchKeyword}`)
    const data = response.data.data
    return data.item
  } catch (error) {
    console.error('Error fetching search results:', error)
    throw error
  }
}
