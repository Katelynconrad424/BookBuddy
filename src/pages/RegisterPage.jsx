import { useState } from "react";
import { registerUser } from "../api/users";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const data = await registerUser({ firstname, lastname, email, password });

    if (data.token) {
      alert("Account created!");
      navigate("/login");
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>

      <input
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
