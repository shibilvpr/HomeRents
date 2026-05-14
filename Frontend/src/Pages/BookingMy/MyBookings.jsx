import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/bookings/${user._id}`)
      .then((res) => setBookings(res.data.bookings));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id}>
          <p>{b.name}</p>
          <p>{b.date}</p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;