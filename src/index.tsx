import React from "react"
import ReactDOM from "react-dom"

import { App } from "./components/App"
import "./styles"

export const AppContainer = () => (
  <div className="app">
    <App />
  </div>
)

ReactDOM.render(<AppContainer />, document.querySelector("#root"))
