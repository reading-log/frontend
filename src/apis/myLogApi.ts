import axios from 'axios'

export const axiosBookSearchResult = async (searchKeyword: string) => {
  try {
    const response = await axios.get(`/api/books/search?q=${searchKeyword}`)
    const data = response.data.data
    return data.item
  } catch (error) {
    console.error('Error fetching search results:', error)
    throw error
  }
}

export const axiosMyLogSearchResult = async (searchKeyword: string) => {
  try {
    const response = await axios.get(`/api/books/search?q=${searchKeyword}`)
    return response.data
  } catch (error) {
    console.error('Error fetching search results:', error)
    throw error
  }
}
