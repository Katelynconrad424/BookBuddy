import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getBook, reserveBook } from "../api/books";
import { AuthContext } from "../context/AuthContext";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    async function loadBook() {
      const data = await getBook(id);
      setBook(data);
    }
    loadBook();
  }, [id]);

  async function handleReserve() {
    if (!token) return alert("You must be logged in");
    await reserveBook(id, token);
    alert("Book reserved!");
  }

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Status: {book.available ? "Available" : "Reserved"}</p>

      {token && book.available && (
        <button onClick={handleReserve}>Reserve</button>
      )}

      {token && !book.available && <button disabled>Not Available</button>}
    </div>
  );
}

export default BookPage;
