import { useEffect, useState } from "react";
import { fetchAllBooks } from "../api/books";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

export default function CatalogPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchAllBooks();
      setBooks(data);
    }
    load();
  }, []);

  return (
    <div className="page">
      <h1>Catalog</h1>

      {books.map((book) => (
        <Link key={book.id} to={`/books/${book.id}`}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
}
