const API_URL =
  "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations";

export async function getReservations(token) {
  if (!token) return [];
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok ? res.json() : [];
}

export async function reserveBook(token, bookId) {
  if (!token) return null;
  const res = await fetch(`${API_URL}/${bookId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok ? res.json() : null;
}

export async function returnBook(token, bookId) {
  if (!token) return null;
  const res = await fetch(`${API_URL}/${bookId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok ? res.json() : null;
}
