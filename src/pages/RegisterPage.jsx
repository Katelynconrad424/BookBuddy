import { useState } from "react";
import { registerUser } from "../api/users";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    const result = await registerUser(form);
    alert(result.message || "Account created! You can now log in.");
  }

  return (
    <form className="page" onSubmit={submit}>
      <h1>Register</h1>

      <input name="name" placeholder="Name" onChange={update} />
      <input name="email" placeholder="Email" onChange={update} />
      <input name="username" placeholder="Username" onChange={update} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={update}
      />

      <button>Create Account</button>
    </form>
  );
}
