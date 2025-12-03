import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import CatalogPage from "./pages/CatalogPage";
import BookPage from "./pages/BookPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ReservationsPage from "./pages/ReservationsPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
