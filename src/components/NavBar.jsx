import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { token, setToken } = useContext(AuthContext);

  function logout() {
    setToken(null);
  }

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/books">Books</Link> |<Link to="/account"> Account </Link>
      {token ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
