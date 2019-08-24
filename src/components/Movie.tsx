import React from "react"

import { Table } from "./Table"
import { IPlanetItemProps } from "./modules/Film.module"
import "../styles"
// @ts-ignore
import closeIcon from "../../assets/ARROW_CLOSE.svg"
// @ts-ignore
import openIcon from "../../assets/ARROW_OPEN.svg"

export const Movie: React.FC<IPlanetItemProps> = props => {
  const [expandTable, setExpand] = React.useState(false)
  const [planetsReference, setPlanetsReference] = React.useState({})

  function expandTableHandler(): void {
    setExpand(!expandTable)
    setPlanetsReference(props.planetsReference)
  }

  return (
    <div className="films-item">
      <div className="films-title">
        <div>{props.movieTitle}</div>
        <div className="films-btn" onClick={expandTableHandler}>
          {expandTable ? <img src={closeIcon} /> : <img src={openIcon} />}
        </div>
      </div>
      {!expandTable ? null : <Table planetsURL={planetsReference} />}
    </div>
  )
}
