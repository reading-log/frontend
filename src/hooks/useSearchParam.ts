import { useEffect } from 'react'

/**검색어 query 저장 */
export const useSearchParam = (keyword: string) => {
  useEffect(() => {
    const location = window.location
    const searchUrl = `${location.origin + location.pathname}?keyword=${keyword}`
    window.history.pushState({ path: searchUrl }, '', searchUrl)
  }, [keyword])
}
