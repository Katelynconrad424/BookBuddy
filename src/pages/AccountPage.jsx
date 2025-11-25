import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getReservations, returnBook } from "../api/reservations";

export default function AccountPage() {
  const { token } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      if (!token) return;
      const data = await getReservations(token);
      setReservations(data);
    }
    fetchReservations();
  }, [token]);

  const handleReturn = async (bookId) => {
    await returnBook(token, bookId);
    setReservations(reservations.filter((r) => r.id !== bookId));
  };

  if (!token) return <p>Please log in to see your account.</p>;

  return (
    <div>
      <h1>My Reservations</h1>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((r) => (
            <li key={r.id}>
              {r.title} by {r.author}
              <button onClick={() => handleReturn(r.id)}>Return</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
