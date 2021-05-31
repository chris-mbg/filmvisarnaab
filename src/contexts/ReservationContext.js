import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  //     reservationInfo needs to look like following for func to work
  //     {
  //       screeningId: "ObjectId",
  //       tickets: [{
  //         ticketType: "adult",
  //         seatNumber: [y,x]
  //       }]
  //       totalPrice: Number,
  //     }

  const saveReservation = async (reservationInfo) => {
    console.log(reservationInfo);
    let result = await fetch("/api/v1/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationInfo),
    });
    result = await result.json();
    console.log("in saveReserv, result:", result);
    if (result.status === "error") {
      console.log("Error. Could not save reservation");
      return false;
    } else {
      console.log("Seats booked", result.reservation);
      //* When possible --> Update list of user reservations showed on ProfilePage.
      return true;
    }
  };

  const values = {
    saveReservation,
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;