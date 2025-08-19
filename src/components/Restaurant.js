import React from "react"
import { observer, inject } from "mobx-react"
import ResInput from "./ResInput"

const Restaurant = (props) => {
  return (
    <div>
      <span>You have {props.RestaurantStore.openTables} open tables</span>
      {/* Add in # of people in restaurant */}
      {/* Add in # of completed tables with id "completedTables" */}
      <ResInput />
      <button id="addRes">Add Reservation</button>
      {/* Make the Add Reservation button work */}
      <div className="reservations">{/* Map reservation data to Reservation components here */}</div>
    </div>
  )
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))
