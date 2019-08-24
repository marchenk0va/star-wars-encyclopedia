import React from "react"

import { useFetchAll } from "../utils"
import { IPlanetTableProps } from "./modules/FilmTable.module"
import { Spinner } from "./presentational/Spinner"
import "../styles"
import MainRow from "./presentational/MainRow"

export const Table: React.FC<IPlanetTableProps> = props => {
  const data = useFetchAll(props.planetsURL)

  return (
    <>
      <table className="films-table">
        <thead className="main-row">
          <MainRow />
        </thead>
        {data.isLoading
          ? null
          : data.response.map((planet: any, index: number) => (
              <tbody key={index}>
                <tr>
                  <th>{planet.name}</th>
                  <th>{planet.rotation_period}</th>
                  <th>{planet.orbital_period}</th>
                  <th>{planet.diameter}</th>
                  <th>{planet.climate}</th>
                  <th>{planet.surface_water}</th>
                  <th>{planet.population}</th>
                </tr>
              </tbody>
            ))}
      </table>
      {data.isLoading ? <Spinner size="small" /> : null}
    </>
  )
}
