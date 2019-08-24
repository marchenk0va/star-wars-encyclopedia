import React from "react"
import { IAPI, IError } from "./index.module"

export const API_URL: IAPI = {
  films: "https://swapi.co/api/films/",
  planets: "https://swapi.co/api/planets/",
}

export const useFetch = (url: string) => {
  const [response, setResponse] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [isError, setError] = React.useState(false)

  React.useEffect((): void => {
    fetchData()
  }, [])

  async function fetchData(): Promise<any> {
    const res = await fetch(url, { mode: "cors" })
    setError(false)
    setLoading(false)
    res
      .json()
      .then(data => setResponse(data.results))
      .catch(err => setError(true))
  }

  return { response, isLoading, isError }
}

export const useFetchAll = (arrayToFetch: string[]) => {
  const [response, setResponse] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [isError, setError] = React.useState(false)

  async function fetchData(): Promise<any> {
    const response = await Promise.all(
      arrayToFetch.map((url: any) =>
        fetch(url, { mode: "cors" })
          .then(y => y.json())
          .catch(err => setError(true))
      )
    )
    setTimeout((): void => setLoading(false), 500)
    setResponse(response)
  }

  React.useEffect((): void => {
    fetchData()
  }, [])

  return { response, isLoading, isError }
}

export const inputValidator = (title: string, planets: string[]): string => {
  let error: IError<string> = {}

  if (!title) {
    error.title = "Name is required!"
  } else if (title.length < 3) {
    error.title = "Movie title must be at least 3 characters long"
  } else if (title.charAt(0).toUpperCase() !== title.charAt(0)) {
    error.title = "Movie title must start from uppercase letter"
  } else if (
    title.length < 3 &&
    title.charAt(0).toUpperCase() !== title.charAt(0)
  ) {
    error.title =
      "The title must start with a capital letter and be at least three letters long"
  }

  if (planets.length < 0) {
    error.planet = "Star Wars movie can not be without planets, add some planet"
  }

  return error
}
