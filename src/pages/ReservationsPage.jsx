import React, { useEffect, useState, useContext } from "react";
import { getReservations } from "../api/reservations";
import { AuthContext } from "../context/AuthContext";

export default function ReservationsPage() {
  const { token } = useContext(AuthContext); // get token from context
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true); // show loading message

  useEffect(() => {
    async function fetchData() {
      if (!token) {
        setReservations([]);
        setLoading(false);
        return;
      }

      try {
        const data = await getReservations(token);
        setReservations(data);
      } catch (error) {
        console.error(error);
        setReservations([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [token]);

  if (!token) return <p>Please log in to view your reservations.</p>;
  if (loading) return <p>Loading reservations...</p>;

  return (
    <div>
      <h1>Your Reservations</h1>
      {reservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        <ul>
          {reservations.map((r) => (
            <li key={r.id}>
              <strong>{r.title}</strong> by {r.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
