const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getBooks() {
  try {
    const res = await fetch(API_URL);
    return res.ok ? res.json() : [];
  } catch {
    return [];
  }
}

export async function getBookDetails(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
}
