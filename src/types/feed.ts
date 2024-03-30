export interface Highlight {
  page: number
  content: string
}

export interface Review {
  content: string
}

export interface FeedType {
  bookAuthor: string
  bookCover: string
  bookTitle: string
  content: string
  createdAt: string

  /* 피드 더미 데이터 타입 */
  id: number
  profileImg: string
  nickname: string
  date: string
  like: number
  bookImg: string
  title: string
  author: string
  publisher: string
  category: string
  oneLine: string
  highlight: Highlight[]
  review: Review[]
}

// export interface Feed {
//   bookAuthor: string
//   bookCover: string
//   bookTitle: string
//   content: string
//   createdAt: string
//   nickname: string
// }

export interface FeedProps {
  feed: FeedType
}
