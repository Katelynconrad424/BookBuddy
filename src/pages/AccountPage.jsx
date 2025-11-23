import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { returnBook } from "../api/books";

function AccountPage() {
  const { user, token } = useContext(AuthContext);

  if (!token) return <p>Please log in or register.</p>;
  if (!user) return <p>Loading user...</p>;

  async function handleReturn(id) {
    await returnBook(id, token);
    alert("Book returned!");
  }

  return (
    <div>
      <h1>Your Account</h1>
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Email: {user.email}</p>

      <h2>Your Reservations</h2>
      {user.reservations?.map((r) => (
        <div key={r.id}>
          <p>{r.title}</p>
          <button onClick={() => handleReturn(r.id)}>Return</button>
        </div>
      ))}
    </div>
  );
}

export default AccountPage;
