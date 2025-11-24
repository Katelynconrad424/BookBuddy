import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const { setToken } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const handleLogin = () => {
    setToken(input); // set token directly
    alert("Logged in!");
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter token"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
