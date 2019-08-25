export interface API {
  films: string;
  planets: string;
}

export interface Error<T> {
  title?: T;
}
