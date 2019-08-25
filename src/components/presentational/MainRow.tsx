import React from "react"

// tslint:disable-next-line
import Icon from "../../../assets/ROW_ARROWS.svg"

const columnList: string[] = [
  "Planet Name",
  "Rotation period",
  "Orbital period",
  "Diameter",
  "Climate",
  "Surface water",
  "Population",
]

export const MainRow = (): JSX.Element => {
  const columns = columnList.map(
    (name: string, index: number): JSX.Element => (
      <td className="main-row-list" key={index}>
        {name}
        <span>
          <img src={Icon} />
        </span>
      </td>
    )
  )
  return <tr>{columns}</tr>
}
