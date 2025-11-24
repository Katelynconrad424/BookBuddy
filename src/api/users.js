const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users";

export async function getMe(token) {
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return null;
  }
}
