import React from "react"

import { Table } from "./Table"
import { MovieProps } from "./modules/Movie.module"
import "../styles"
// tslint:disable-next-line
import closeIcon from "../../assets/ARROW_CLOSE.svg"
// tslint:disable-next-line
import openIcon from "../../assets/ARROW_OPEN.svg"

export const Movie: React.FC<MovieProps> = ({ planetsReference, movieTitle }: MovieProps) => {
  const [expandTable, setExpand] = React.useState(false)
  const [reference, setPlanetsReference] = React.useState([])

  function expandTableHandler(): void {
    setExpand(!expandTable)
    setPlanetsReference(planetsReference)
  }

  return (
    <div className="films-item">
      <div className="films-title" onClick={expandTableHandler}>
        <div>{movieTitle}</div>
        <div className="films-btn">
          {expandTable ? <img src={closeIcon} /> : <img src={openIcon} />}
        </div>
      </div>
      {!expandTable ? null : <Table planetsURL={reference} />}
    </div>
  )
}
