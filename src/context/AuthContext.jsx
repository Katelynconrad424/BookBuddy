import { createContext, useContext, useState, useEffect } from "react";
import { fetchAccount, loginUser } from "../api/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadAccount() {
      if (token) {
        const account = await fetchAccount(token);
        setUser(account);
      }
    }
    loadAccount();
  }, [token]);

  async function login(formData) {
    const result = await loginUser(formData);

    if (result.token) {
      setToken(result.token);
      localStorage.setItem("token", result.token);
    }

    return result;
  }

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

export function useAuth() {
  return useContext(AuthContext);
}
