import React from "react"
import { shallow } from "enzyme"

import { AppContainer } from "../index"
import { App } from "../components/App"

describe("#AppContainer", () => {
  it("should contain App component", () => {
    const result = shallow(<AppContainer />).contains(<App />)
    expect(result).toBeTruthy()
  })
})
