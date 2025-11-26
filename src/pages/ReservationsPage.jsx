import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyReservations, returnBook } from "../api/reservations";

export default function ReservationsPage() {
  const { token } = useAuth();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMyReservations(token);
      setReservations(data);
    }
    fetchData();
  }, [token]);

  async function handleReturn(bookId) {
    await returnBook(token, bookId);
    setReservations((prev) => prev.filter((r) => r.bookId !== bookId));
  }

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
