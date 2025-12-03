import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../api/books";
import { reserveBook } from "../api/reservations";
import { useAuth } from "../context/AuthContext";
//useParams gets the id from the URL (so we know which book to show)
//fetchBookById loads a single book from the API
//reserveBook allows reserving a book
//useAuth gives access to the user’s token (login state)
export default function BookPage() {
  const { id } = useParams(); //This ID tells the component which book to fetch from the API.
  const [book, setBook] = useState(null); //book will hold the API data once it’s loaded. Initially it is null.
  const { token } = useAuth();

  useEffect(() => {
    async function load() {
      const data = await fetchBookById(id);
      setBook(data);
    }
    load();
  }, [id]);
  //Calls the API to get the book by ID
  //Stores the result in book
  //Runs again if the id in the URL changes
  async function handleReserve() {
    if (!token) {
      alert("You must log in first!");
      return;
    }

    const result = await reserveBook(book.id, token);
    alert(result.message || "Book reserved!");
  }
  //Checks if the user is logged in
  //If not → shows an alert
  //If yes → calls the API to reserve the book
  //Shows a confirmation message
  if (!book) return <p>Loading...</p>; //While the book data is being fetched, it shows “Loading...”

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
//Shows the title, author, cover image, and description
//Shows a Reserve Book button
//If the book is already reserved, the button text changes to “Already Reserved”
