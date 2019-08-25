import React from "react"

import "../../styles/index.scss"
import { SpinnerProps } from "../modules/Spinner.module"
// tslint:disable-next-line
import spinner from "../../../assets/LOADING.svg"

export const Spinner: React.FC<SpinnerProps> = ({size}: SpinnerProps) => (
  <img src={spinner} className={`spinner-${size}`} />
)
