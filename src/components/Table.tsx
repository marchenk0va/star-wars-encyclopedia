import React from "react"
import PropTypes from "prop-types"

import { useFetchAll } from "../utils"
import { TableProps, Planet } from "./modules/Table.module"
import { Spinner } from "./presentational/Spinner"
import "../styles"
import { MainRow } from "./presentational/MainRow"

export const Table = ({planetsURL}) => {
  const data = useFetchAll(planetsURL);
  const planets = data.response;

  return (
    <>
      <table className="films-table">
        <MainRow />
        {data.isLoading
          ? null
          : planets.map((planet: Planet, index: number): JSX.Element => (
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

Table.propTypes = {
  planetsURL: PropTypes.array,
}