import { useEffect, useState } from "react";
import { fetchAllBooks } from "../api/books";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
//fetchAllBooks gets all books from the API
//Link allows clicking on a book to go to its detail page
//BookCard is a component that displays a single book’s title, author, and cover image
export default function CatalogPage() {
  const [books, setBooks] = useState([]); //books starts as an empty array. Will be filled with data from the API

  useEffect(() => {
    async function load() {
      const data = await fetchAllBooks();
      setBooks(data);
    }
    load();
  }, []);
  //Calls the API to fetch all books
  //Saves the books in state
  //The empty array [] as a dependency ensures this runs only once when the component mounts
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
//Loops through each book in books
//Wraps each BookCard in a Link to /books/<book.id>
//When a user clicks a book, it navigates to that book’s BookPage
//Uses BookCard to visually display the book’s title, author, and cover image
