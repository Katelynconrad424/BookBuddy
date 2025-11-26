import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../api/books";
import { reserveBook } from "../api/reservations";
import { useAuth } from "../context/AuthContext";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    async function load() {
      const data = await fetchBookById(id);
      setBook(data);
    }
    load();
  }, [id]);

  async function handleReserve() {
    if (!token) {
      alert("You must log in first!");
      return;
    }

    const result = await reserveBook(book.id, token);
    alert(result.message || "Book reserved!");
  }

  if (!book) return <p>Loading...</p>;

  return (
    <div className="page">
      <h1>{book.title}</h1>
      <p>by {book.author}</p>

      <img src={book.coverImage} alt="" width="150" />

      <p>{book.description}</p>

      <button onClick={handleReserve}>
        {book.isReserved ? "Already Reserved" : "Reserve Book"}
      </button>
    </div>
  );
}
