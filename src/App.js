import React from "react"
import "./App.css"
import { observer } from "mobx-react"
import Restaurant from "./components/Restaurant"

const App = () => {
  return (
    <div className="App">
      <h3>Reservations</h3>
      <Restaurant />
    </div>
  )
}

export default observer(App)
