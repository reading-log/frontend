import axios from 'axios'

export const axiosSearchResults = async (searchKeyword: string) => {
  try {
    const response = await axios.get(`https://api.readinglog.site/api/books/search?q=${searchKeyword}`)
    return response.data
  } catch (error) {
    console.error('Error fetching search results:', error)
    throw error
  }
}
