import React from "react"

// @ts-ignore
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

export default () => {
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
