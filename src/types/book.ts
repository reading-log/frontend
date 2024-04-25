export interface ISearchBook {
  itemId: string
  title: string
  author: string
  publisher: string
  cover: string
}

export interface IBookProp {
  title: string
  author: string
  publisher: string
  cover: string
}

export interface IBookInputProp extends IBookProp {
  category: string
}
