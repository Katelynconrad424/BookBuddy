import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getReservations, returnBook } from "../api/reservations";

export default function AccountPage() {
  const { token } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!token) return;
      const data = await getReservations(token);
      setReservations(data);
    }
    fetchData();
  }, [token]);

  const handleReturn = async (bookId) => {
    if (!token) return;
    await returnBook(token, bookId);
    setReservations(reservations.filter((r) => r.id !== bookId));
  };

  if (!token) return <p>Please log in to see your account.</p>;

  return (
    <div>
      <h1>My Account</h1>
      <h2>My Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((r) => (
            <li key={r.id}>
              {r.title} by {r.author}{" "}
              <button onClick={() => handleReturn(r.id)}>Return</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
