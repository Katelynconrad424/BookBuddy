import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, setToken } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Catalog</Link> | <Link to="/reservations">Reservations</Link>{" "}
      | <Link to="/account">Account</Link> |{" "}
      {token ? (
        <button onClick={() => setToken(null)}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
