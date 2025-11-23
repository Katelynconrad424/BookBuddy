import { useEffect, useState } from "react";
import { getAllBooks } from "../api/books";
import BookCard from "../components/BookCard";

function CatalogPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const data = await getAllBooks();
      setBooks(data);
    }
    loadBooks();
  }, []);

  return (
    <div>
      <h1>Book Catalog</h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default CatalogPage;
