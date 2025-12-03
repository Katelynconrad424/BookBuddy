import { createContext, useContext, useState, useEffect } from "react";
import { fetchAccount, loginUser } from "../api/users";

// This creates a shared "Auth Box" that the whole app can use.
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // token = tells us if the user is logged in
  const [token, setToken] = useState(localStorage.getItem("token"));

  // user = actual account info (username, id, etc.)
  const [user, setUser] = useState(null);

  // Load the user’s account info when the app starts
  // or whenever the token changes
  useEffect(() => {
    async function loadAccount() {
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const account = await fetchAccount(token);

        // If the API returns something invalid, prevent crashing
        if (!account || account.error) {
          setUser(null);
          return;
        }

        setUser(account);
      } catch (err) {
        console.error("Failed to load account:", err);
        setUser(null);
      }
    }

    loadAccount();
  }, [token]);

  // Login function
  // Sends email + password to the API
  // Gets back a token
  async function login(formData) {
    const result = await loginUser(formData);

    if (result.token) {
      setToken(result.token);
      localStorage.setItem("token", result.token);
    }

    return result;
  }

  // Logout function
  // Clears the token and removes everything
  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Makes it easier to use the AuthContext in other components
export function useAuth() {
  return useContext(AuthContext);
}
