import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../api/books";
import { reserveBook } from "../api/reservations";
import { AuthContext } from "../context/AuthContext";

export default function BookPage() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      const data = await getBookDetails(id);
      setBook(data);
    }
    fetchBook();
  }, [id]);

  const handleReserve = async () => {
    if (!token) return alert("Login first!");
    await reserveBook(token, id);
    alert("Book reserved!");
  };

  if (!book) return <p>Loading book...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>{book.description}</p>
      <button onClick={handleReserve} disabled={!token || book.reserved}>
        {book.reserved ? "Already Reserved" : "Reserve"}
      </button>
    </div>
  );
}
