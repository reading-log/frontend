export interface Highlight {
  content: string[]
  page: number
}

export type FeedType = {
  id: number
  category: string
  img: string
  title: string
  nickname: string
  date: string
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
