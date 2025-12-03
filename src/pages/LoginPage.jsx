import { useState } from "react";
import { useAuth } from "../context/AuthContext";
//useState manages the form input values
//useAuth gives access to the login function from the AuthContext
export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  //form.username → the username input
  //form.password → the password input
  //Initially, both are empty
  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  //e is the event object from typing in the input
  //Updates the correct field dynamically (username or password)
  //Keeps other fields unchanged using { ...form }
  async function submit(e) {
    e.preventDefault();
    const result = await login(form);

    if (result.token) {
      alert("Logged in!");
    } else {
      alert("Login failed.");
    }
  }
  //e.preventDefault() stops the page from reloading
  //Calls the login function from AuthContext with the form data
  //If the server returns a token → shows a success alert
  //If login fails → shows an error alert
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
//Two input fields: username and password
//A submit button that triggers the login process
//Uses the update function to keep input values in sync with state
