import React from "react"

import "../../styles/index.scss"
import { SpinnerProps } from "../modules/Spinner.module"
// @ts-ignore
import spinner from "../../../assets/LOADING.svg"

export const Spinner: React.FC<SpinnerProps> = props => (
  <img src={spinner} className={`spinner-${props.size}`} />
)
