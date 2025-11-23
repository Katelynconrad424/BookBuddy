import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
