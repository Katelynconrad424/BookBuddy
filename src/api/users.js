const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(info) {
  const res = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  });
  return res.json();
}

export async function loginUser(info) {
  const res = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  });
  return res.json();
}
