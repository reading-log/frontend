/**검색어 뽑아내기 */
export const getSearchParam = () => {
  const search = window.location.search
  const params = new URLSearchParams(search)
  return params.get('keyword')
}
