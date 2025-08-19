import React from "react"
import { observer, inject } from "mobx-react"

const Reservation = (props) => {
  // render the reservation data here
  // make sure you store the ID somewhere so you can find the reservation
  // use the class "conditional" to conditionally render completed reservations
  // You should have a complete reservation button to complete the reservation
  return <div></div>
}

export default inject("GeneralStore", "RestaurantStore")(observer(Reservation))
