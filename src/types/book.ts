/**검색한 책  */
export interface ISearchBook {
  itemId?: string
  title: string
  author: string
  publisher: string
  cover: string
}

export interface IBookInput extends ISearchBook {
  category: string
}
