const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"; // USE THIS

export async function getAllBooks() {
  const res = await fetch(`${API}/books`);
  return res.json();
}

export async function getBook(id) {
  const res = await fetch(`${API}/books/${id}`);
  return res.json();
}

export async function reserveBook(id, token) {
  const res = await fetch(`${API}/books/${id}/reserve`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}

export async function returnBook(id, token) {
  const res = await fetch(`${API}/books/${id}/return`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
