const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
//The books.js file is responsible for talking to the
// BookBuddy API to get book information. It contains functions
// that make requests to the server and return the data so the
// rest of React app can use it.
export async function fetchAllBooks() {
  const res = await fetch(`${API}/books`);
  return res.json();
}
//What this does in words:
//Sends a request to the API asking for all the books.
//Waits for the server to respond.
//Turns the response into usable JavaScript data.
//Sends that data back to whoever called the function.
// "res" is for response
export async function fetchBookById(id) {
  const res = await fetch(`${API}/books/${id}`);
  return res.json();
}
//What this does in words:
//Takes a book’s ID as an input.
//Sends a request to get information for just that one book.
//Waits for a response from the API.
//Converts the response into JavaScript data.
//Returns that data.
