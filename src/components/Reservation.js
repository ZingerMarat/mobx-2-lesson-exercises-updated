import React from "react"
import { observer, inject } from "mobx-react"

const Reservation = ({ res, RestaurantStore }) => {
  return (
    <div className={res.completed ? "conditional" : ""}>
      <div>ID: {res.id}</div>
      <div>Name: {res.name}</div>
      <div>People: {res.numPeople}</div>
      <div>Seated: {String(res.seated)}</div>
      <div>Completed: {String(res.completed)}</div>

      <div>
        <button onClick={() => RestaurantStore.seatRes(res.id)} disabled={res.seated}>
          Seat
        </button>
        <button onClick={() => RestaurantStore.completeRes(res.id)} disabled={!res.seated || res.completed}>
          Complete
        </button>
      </div>
    </div>
  )
}

export default inject("GeneralStore", "RestaurantStore")(observer(Reservation))
