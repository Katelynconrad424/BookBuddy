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
