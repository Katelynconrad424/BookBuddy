import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    const result = await login(form);

    if (result.token) {
      alert("Logged in!");
    } else {
      alert("Login failed.");
    }
  }

  return (
    <form className="page" onSubmit={submit}>
      <h1>Login</h1>

      <input name="username" placeholder="Username" onChange={update} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={update}
      />

      <button>Log In</button>
    </form>
  );
}
