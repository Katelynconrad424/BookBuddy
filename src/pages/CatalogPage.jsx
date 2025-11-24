import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../api/books";

export default function CatalogPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link> by{" "}
              {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
