import React from "react"
import { API, Error } from "./index.module"
import { Planet } from "../components/modules/Table.module"

export const API_URL: API = {
  films: "https://swapi.co/api/films/",
  planets: "https://swapi.co/api/planets/",
}

interface FetchResponse {
  response?: Planet[];
  isLoading?: boolean;
  isError?: string[];
}

export const useFetch = (url: string): FetchResponse => {
  const [response, setResponse] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [isError, setError] = React.useState([])

  async function fetchData(): Promise<any> {
    const res = await fetch(url, { mode: "cors" })
    setLoading(false)
    res
      .json()
      .then(data => setResponse(data.results))
      .catch(err => setError(err))
  }

  React.useEffect((): void => {
    fetchData()
  }, [])

  return { response, isLoading, isError }
}

export const useFetchAll = (arrayToFetch: string[]): FetchResponse => {
  const [response, setResponse] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [isError, setError] = React.useState([])

  async function fetchData(): Promise<any> {
    const response = await Promise.all(
      arrayToFetch.map((url: any): Promise<any> =>
        fetch(url, { mode: "cors" })
          .then(y => y.json())
          .catch(err => setError(err))
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

export const inputValidator = (title: string): string | {} => {
  const error: Error<string> = {}

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

  return error
}
