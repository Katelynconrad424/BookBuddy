const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(userData) {
  const res = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return res.json();
}

export async function loginUser(loginData) {
  const res = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  return res.json();
}

export async function fetchAccount(token) {
  const res = await fetch(`${API}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
