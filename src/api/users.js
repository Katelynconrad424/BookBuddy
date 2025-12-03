const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(userData) {
  const res = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return res.json();
}
//What it does:
//Sends a POST request to the API to create a new account.
//Includes the user’s info (like username, password, email).
//Converts the data into JSON so the server can read it.
//Returns the server’s response (success or error).
// "res" is for response
export async function loginUser(loginData) {
  const res = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });
  //JSON.stringify: It converts objects, arrays, or values into a string so they can be:
  //saved in localStorage
  //sent to an API
  //logged cleanly
  //copied or stored somewhere

  return res.json();
}
//What it does:
//Sends a POST request to the API to log in.
//Sends the username + password in the request body.
//The server responds with a token if login is successful.
export async function fetchAccount(token) {
  const res = await fetch(`${API}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
//What it does:
//Sends a request to get the logged-in user’s account info.
//Uses the Authorization header with the token:
//This tells the API who the user is.
//Returns the user’s info (like id, username, email, reservations).
