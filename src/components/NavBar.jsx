import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//Link switches pages without reloading the site.
//useAuth gives access to:
//the user’s token (are they logged in?)
//the logout function.
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
      {/*So the user can sign in or create an account. */}
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
//So the user can:
//View their reservations
//View their account details
//Logout
