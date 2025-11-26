import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyReservations, returnBook } from "../api/reservations";

export default function AccountPage() {
  const { user, token } = useAuth();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function load() {
      if (token) {
        const data = await getMyReservations(token);
        setReservations(data);
      }
    }
    load();
  }, [token]);

  async function handleReturn(resId) {
    await returnBook(resId, token);
    setReservations(reservations.filter((r) => r.id !== resId));
  }

  if (!user) return <p>Please log in first.</p>;

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
