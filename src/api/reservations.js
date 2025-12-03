const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
export async function getMyReservations(token) {
  try {
    const res = await fetch(`${API}/reservations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  } catch (err) {
    console.log("Error getting reservations:", err);
    return [];
  }
}
//What this does:
//Sends a request to the API asking for all the reservations that belong to the logged-in user.
//It includes the Authorization header, which tells the API who the user is.
//If successful, the server returns a list of the user’s reservations.
//If something goes wrong, it logs an error and returns an empty list.
export async function reserveBook(bookId, token) {
  try {
    const res = await fetch(`${API}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ bookId }),
    });

    return res.json();
  } catch (err) {
    console.log("Error reserving book:", err);
  }
}
//What this does:
//Sends a request to the API to reserve a book.
//Uses POST to create a new reservation.
//Sends the ID of the book you want to reserve.
//Includes the token so the API knows who is reserving the book.
//Returns the server’s response (usually the new reservation).
export async function returnBook(reservationId, token) {
  try {
    const res = await fetch(`${API}/reservations/${reservationId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  } catch (err) {
    console.log("Error returning book:", err);
  }
}
//What this does:
//Sends a request to delete (cancel) a reservation.
//Uses DELETE method.
//Includes the token so the API knows who is returning the book.
//Returns the server’s response.
