export interface Highlight {
  page: number
  content: string
}

export interface FeedType {
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
  review: string
}

export interface FeedProps {
  feed: FeedType
}
