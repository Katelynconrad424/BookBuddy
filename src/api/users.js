const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getMe(token) {
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
}
