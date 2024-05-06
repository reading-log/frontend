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

/**하이라이트 */
type TBookHighlight = {
  content: string
  createdAt: string
  id: number
  page: number
}[]

/**서평 */
type TBookReview = {
  content: string
  createdAt: string
  id: number
}[]

/**책 요약 정보(하이라이트, 서평) */
export interface IBookSummary {
  bookId?: string
  bookHighlightData: TBookHighlight
  bookReviewData: TBookReview
}

export interface IBookHighlight {
  bookId?: string
  bookHighlightData?: TBookHighlight
}

export interface IBookReview {
  bookId?: string
  bookReviewData: TBookReview
  isReviewEdit: {
    toggle: boolean
    edit: boolean
    content: string
  }
  setIsReviewEdit: React.Dispatch<React.SetStateAction<{ toggle: boolean; edit: boolean; content: string }>>
}

/**책 한줄평 */
export interface IBookComment {
  bookId?: string
  bookCommentData: {
    content: string
    createdAt: string
    id: number
    modifiedAt: string
    nickname: string
  }[]
}
