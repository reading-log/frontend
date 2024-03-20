export type FeedType = {
  id: number
  category: string
  img: string
  title: string
  nickname: string
  date: string
}

export type FeedProps = {
  user: FeedType
}

export type CategoryProps = {
  selectedCategory: string
}
