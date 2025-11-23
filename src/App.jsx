import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import CatalogPage from "./pages/CatalogPage";
import BookPage from "./pages/BookPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/books" element={<CatalogPage />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
