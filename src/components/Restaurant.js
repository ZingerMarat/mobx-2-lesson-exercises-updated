import React from "react"
import { observer, inject } from "mobx-react"
import ResInput from "./ResInput"
import Reservation from "./Reservation.js"

const Restaurant = (props) => {
  const { RestaurantStore, GeneralStore } = props

  const handleAdd = () => {
    const name = GeneralStore.name
    const num = parseInt(GeneralStore.numPeople, 10)

    if (!name || !Number.isFinite(num) || num <= 0) {
      alert("Please enter a valid name and number of people.")
      return
    }

    RestaurantStore.addRes(name, num)
    GeneralStore.reset()
  }
  return (
    <div>
      <span>You have {props.RestaurantStore.openTables} open tables</span>
      {/* Add in # of people in restaurant */}
      <div>{props.RestaurantStore.restPopulation} people in restaurant</div>
      {/* Add in # of completed tables with id "completedTables" */}
      <div>{props.RestaurantStore.completedTables} of completed tables</div>
      <ResInput />
      <button id="addRes" onClick={handleAdd}>
        Add Reservation
      </button>
      {/* Make the Add Reservation button work */}
      <div className="reservations">
        {/* Map reservation data to Reservation components here */}
        {props.RestaurantStore.reservations.map((r) => (
          <Reservation key={r.id} res={r} />
        ))}
      </div>
    </div>
  )
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))
