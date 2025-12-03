// Import the useState hook so we can store form data
import { useState } from "react";
// Import the API function that sends registration info to the server
import { registerUser } from "../api/users";

// This component displays the registration form
export default function RegisterPage() {
  // Store all form input fields in a single state object
  const [form, setForm] = useState({
    username: "", // starts empty
    password: "", // starts empty
    email: "", // starts empty
    name: "", // starts empty
  });

  // Runs whenever the user types in a field
  function update(e) {
    // Update ONLY the field the user is changing
    // e.target.name refers to the input's "name" attribute (e.g., "email")
    // e.target.value is whatever the user typed
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Runs when the user submits the registration form
  async function submit(e) {
    e.preventDefault(); // prevents page reload

    // Send form data (username, email, password, name) to the API
    const result = await registerUser(form);

    // If the API responds with a token, registration succeeded
    if (result.token) {
      alert("Account created! You can now log in.");
    } else {
      // If no token was returned, registration failed
      alert(result.error || "Registration failed.");
    }
  }

  // What the user sees on the screen
  return (
    // When submitted, it triggers the submit() function above
    <form className="page" onSubmit={submit}>
      <h1>Register</h1>

      {/* Input for the user's real name */}
      <input name="name" placeholder="Name" onChange={update} />

      {/* Input for the user's email */}
      <input name="email" placeholder="Email" onChange={update} />

      {/* Input for the username the user wants */}
      <input name="username" placeholder="Username" onChange={update} />

      {/* Password input field (text hidden) */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={update}
      />

      {/* Button that submits the form */}
      <button>Create Account</button>
    </form>
  );
}
