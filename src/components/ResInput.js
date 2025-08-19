import React from "react"
import { observer, inject } from "mobx-react"
const ResInput = (props) => {
  const inputHandler = (e) => {
    props.GeneralStore.handleInput(e.target.name, e.target.value)
  }
  return (
    <div>
      <input onChange={inputHandler} name="name" placeholder="Name" />
      <input onChange={inputHandler} name="numPeople" type="number" placeholder="Number of people" />
    </div>
  )
}

export default inject("GeneralStore")(observer(ResInput))
