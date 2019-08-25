import React from "react"

import "../styles"
import { API_URL, useFetch } from "../utils"
import { MovieList } from "./MovieList"
import { Spinner } from "./presentational/Spinner"
// tslint:disable-next-line
import logo from "./../../assets/LOGO.svg"

export const App: React.FC = () => {
  const data: any = useFetch(`${API_URL.films}`)
  const filmList = data.response

  return (
    <div className="container">
      <img src={logo} className="logo" />
      <div>
        {data.isLoading ? (
          <Spinner size="big" />
        ) : (
          <MovieList filmList={filmList} />
        )}
      </div>
      <p className="footer">copyright © 2019 mirumee software</p>
    </div>
  )
}
