import React, { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookCard from "../components/BookCard";

export default function CatalogPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  const handleReserved = (bookId) => {
    setBooks(
      books.map((b) => (b.id === bookId ? { ...b, reserved: true } : b))
    );
  };

  return (
    <div>
      <h1>Catalog</h1>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} onReserved={handleReserved} />
        ))
      )}
    </div>
  );
}
