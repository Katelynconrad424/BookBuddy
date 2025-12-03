import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyReservations, returnBook } from "../api/reservations";
//useAuth gets the current user and token
//getMyReservations loads the user’s reservations
//returnBook allows the user to return a book
export default function AccountPage() {
  const { user, token } = useAuth();
  const [reservations, setReservations] = useState([]);
  //user → contains the user’s name, email, id, etc.
  //token → needed to access protected API routes
  //If there’s no user, the page will not load.
  useEffect(() => {
    async function load() {
      if (token) {
        const data = await getMyReservations(token);
        setReservations(data);
      }
    }
    load();
  }, [token]);
  //Runs when the component loads or when the token changes.
  //If logged in, it calls the API to get all reservations.
  //Saves them in state so they can be displayed.
  async function handleReturn(resId) {
    await returnBook(resId, token);
    setReservations(reservations.filter((r) => r.id !== resId));
  }
  //Calls the API to delete the reservation.
  //Removes that reservation from the list visually.
  //Updates the page without needing a refresh.
  if (!user) return <p>Please log in first.</p>;
  //If the user is not logged in, show a message
  return (
    <div className="page">
      <h1>Your Account</h1>

      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>

      <h2>Your Reservations</h2>

      {reservations.map((r) => (
        <div className="reservation-box" key={r.id}>
          <p>{r.book.title}</p>
          <button onClick={() => handleReturn(r.id)}>Return Book</button>
        </div>
      ))}
    </div>
  );
}
//The user's name
//The user's email
//Each book the user has reserved
//A “Return Book” button for each reservation
