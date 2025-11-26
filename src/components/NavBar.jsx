import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { token, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Catalog</Link>

      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {token && (
        <>
          <Link to="/reservations">My Reservations</Link>
          <Link to="/account">Account</Link>
          <button onClick={logout} style={{ marginLeft: "auto" }}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
