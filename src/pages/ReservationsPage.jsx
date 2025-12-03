import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyReservations, returnBook } from "../api/reservations";
//useAuth provides the user’s token (login status)
//getMyReservations fetches all reservations for the logged-in user
//returnBook allows the user to cancel a reservation
export default function ReservationsPage() {
  const { token } = useAuth();
  const [reservations, setReservations] = useState([]);
  //reservations starts as an empty array
  //Will be filled with data from the API
  useEffect(() => {
    async function fetchData() {
      const data = await getMyReservations(token);
      setReservations(data);
    }
    fetchData();
  }, [token]);
  //Calls the API to get all reservations for the logged-in user
  //Updates the state so the reservations can be displayed
  //Runs again if the token changes
  async function handleReturn(bookId) {
    await returnBook(token, bookId);
    setReservations((prev) => prev.filter((r) => r.bookId !== bookId));
  }
  //Calls the API to delete the reservation
  //Removes that reservation from the displayed list without reloading the page
  return (
    <div className="container">
      <h2>My Reservations</h2>

      {reservations.length === 0 && <p>No current reservations.</p>}

      {reservations.map((r) => (
        <div className="card" key={r.id}>
          <h3>{r.bookTitle}</h3>
          <p>Reserved on: {r.date}</p>
          <button onClick={() => handleReturn(r.bookId)}>Return Book</button>
        </div>
      ))}
    </div>
  );
}
//Shows a heading: “My Reservations”
//If there are no reservations → shows a message: No current reservations.
//Otherwise, for each reservation, shows:
//Book title
//Date reserved
//A button to return the book
