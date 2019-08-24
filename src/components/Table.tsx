import React from "react"

import { useFetchAll } from "../utils"
import { ITableProps, IPlanet } from "./modules/Table.module"
import { Spinner } from "./presentational/Spinner"
import "../styles"
import MainRow from "./presentational/MainRow"

export const Table: React.FC<ITableProps> = props => {
  const data = useFetchAll(props.planetsURL);
  const planets = data.response;

  return (
    <>
      <table className="films-table">
        <thead className="main-row">
          <MainRow />
        </thead>
        {data.isLoading
          ? null
          : planets.map((planet: IPlanet, index: number): JSX.Element => (
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
