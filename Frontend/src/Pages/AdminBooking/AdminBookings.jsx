import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminBookings.css";
const api = import.meta.env.VITE_API_URL;

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/bookings`);
      setBookings(res.data.bookings || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `${API}/api/admin/bookings/${id}`,
        { status }
      );
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-bookings">
      {/* <h2>📋 All Bookings</h2> */}

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Category</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.location}</td>
                <td>{b.category}</td>
                <td>{new Date(b.startDate).toLocaleDateString()}</td>
                <td>{new Date(b.endDate).toLocaleDateString()}</td>

                <td>
                  <span className={`status ${b.status}`}>
                    {b.status}
                  </span>
                </td>

                <td>
                  <button onClick={() => updateStatus(b._id, "approved")}>
                    ✔
                  </button>
                  <button onClick={() => updateStatus(b._id, "rejected")}>
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;