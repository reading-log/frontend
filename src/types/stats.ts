export type TBookChart = {
  category: string
  count: number
}

export type TBookCalendar = {
  bookId: number
  title: string
  createdAt: string
}

export interface IStatsData {
  month: string
  lastMonthTotalBookCount: number
  thisMonthTotalBookCount: number
  thisMonthLikeCount: number
  bookCountGroupByCategory: TBookChart[]
  bookCalendarList: TBookCalendar[]
}

export type TModal = {
  isOpen: boolean
  data: TBookCalendar[]
  date: string
}
