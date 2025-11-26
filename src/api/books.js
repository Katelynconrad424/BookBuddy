const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchAllBooks() {
  const res = await fetch(`${API}/books`);
  return res.json();
}

export async function fetchBookById(id) {
  const res = await fetch(`${API}/books/${id}`);
  return res.json();
}
