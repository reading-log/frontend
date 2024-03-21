export interface Highlight {
  content: string[]
  page: number
}

export type FeedType = {
  id: number
  profileImg: string
  nickname: string
  date: string
  title: string
  author: string
  publisher: string
  category: string
  img: string
  oneLine: string
  highlight: Highlight[]
  review: string
}

export type FeedProps = {
  user: FeedType
}

export type CategoryProps = {
  selectedCategory: string
}
