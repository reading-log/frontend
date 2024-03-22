export interface Highlight {
  content: string[]
  page: number
}

export type FeedType = {
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

export type FeedProps = {
  feed: FeedType
}

export type CategoryProps = {
  selectedCategory: string
}
