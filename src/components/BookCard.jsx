import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { reserveBook } from "../api/reservations";

export default function BookCard({ book, onReserved }) {
  const { token } = useContext(AuthContext);

  const handleReserve = async () => {
    if (!token) return alert("Please log in first!");
    await reserveBook(token, book.id);
    alert("Book reserved!");
    if (onReserved) onReserved(book.id); // callback to refresh parent state
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
      <br />
      <button onClick={handleReserve} disabled={!token || book.reserved}>
        {book.reserved ? "Already Reserved" : "Reserve"}
      </button>
    </div>
  );
}
