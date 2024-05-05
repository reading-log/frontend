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

/**등록한 책 정보  */
export interface IBook {
  bookId: number
  title: string
  author: string
  publisher: string
  cover: string
}
/**책 정보  */
export interface IBookInfo {
  author: string
  category: string
  cover: string
  publisher: string
  title: string
}

/**책 등록 날짜 정보 */
export interface IBookDate {
  bookId?: string
  bookRecordDate?: {
    bookId: number
    endDate: string
    memberId: number
    recordId: number
    startDate: string
  }[]
}
