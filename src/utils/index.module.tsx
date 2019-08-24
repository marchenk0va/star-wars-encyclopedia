export interface IAPI {
  films: string
  planets: string
}

export interface IError<T> {
  title?: T
  planet?: T
}

export interface IResponse {
  response?: {},
  isLoading?: boolean,
  isError?: boolean
}
