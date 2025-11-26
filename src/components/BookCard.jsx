export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} width="80" />
      <div>
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
      </div>
    </div>
  );
}
