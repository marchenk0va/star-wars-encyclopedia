import React from "react"
import Select from "react-select"

import "../styles"
import { Movie } from "./Movie"
import { IFilmListProps } from "./modules/FilmList.module"
import { API_URL, useFetch, inputValidator } from "../utils"
import { IError } from "../utils/index.module"
// @ts-ignore
import closeIcon from "../../assets/ARROW_CLOSE.svg"
// @ts-ignore
import openIcon from "../../assets/ARROW_OPEN.svg"

export const MovieList: React.FC<IFilmListProps> = props => {
  let movies: any = props.filmList
  const [title, setTitle] = React.useState("")
  const [planets, setPlanets] = React.useState([])
  const [expandForm, setExpandForm] = React.useState(false)
  const [errorType, setErrorType]: [IError<string>, any] = React.useState({})
  const data = useFetch(`${API_URL.planets}`)
  const optionValues = data.response.map(planet => ({
    label: planet.name,
    value: planet.url,
  }))

  function movieTitleHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault()
    setTitle(event.target.value)
  }

  function searchPlanetHandler(input: any): void {
    setPlanets(input)
  }

  function expandFormHandler(event: any): void {
    event.preventDefault()
    setExpandForm(!expandForm)
  }

  function addMovieHandler(): void {
    const error = inputValidator(title, planets)
    if (Object.keys(error).length === 0) {
      const newMovie = {
        title: title,
        planets: planets.map(planet => planet.value),
      }
      movies.push(newMovie)
      setExpandForm(false)
      setTitle("")
      setPlanets([])
    } else {
      setErrorType(error)
      if (errorType.title) {
        setTitle("")
      }
    }
  }

  return (
    <div className="films">
      {movies.map((movie: any, index: number) => (
        <Movie
          key={index}
          movieTitle={movie.title}
          planetsReference={movie.planets}
        />
      ))}
      <span className="films-span"></span>
      <div className="films-item">
        <div className="films-title">
          <div>Add movie</div>
          <div onClick={e => expandFormHandler(e)}>
            {expandForm ? <img src={closeIcon} /> : <img src={openIcon} />}
          </div>
        </div>
        {!expandForm ? null : (
          <div className="form">
            <form className="form-input">
              <label className="form-input-label">Movie title</label>
              <input
                type="text"
                required
                className="input"
                value={title}
                onChange={e => movieTitleHandler(e)}
                placeholder="Please enter the title of the movie"
              />
              {!errorType.title ? null : (
                <label className="error">{errorType.title}</label>
              )}
            </form>
            <div className="form-search">
              <Select
                options={optionValues}
                onChange={searchPlanetHandler}
                placeholder="Search for the planet in the database"
                isMulti
              />
            </div>
            <div>
              <button className="add-btn" onClick={addMovieHandler}>
                Add Movie
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
