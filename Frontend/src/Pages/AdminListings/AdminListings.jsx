import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminListings.css";

const AdminListings = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/listings");
      setListings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/listings/${id}`, { status });
    fetchListings();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/listings/${id}`);
    fetchListings();
  };

  return (
    <div className="admin-listings">
      <h2 className="admin-title">Manage Listings</h2>

      {listings.length === 0 ? (
        <p className="empty">No listings available</p>
      ) : (
        <div className="table-wrapper">
          <table className="listing-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {listings.map((item) => (
                <tr key={item._id}>
                  
                  {/* IMAGE */}
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt="listing"
                      className="listing-img"
                    />
                  </td>

                  {/* NAME */}
                  <td>{item.name}</td>

                  {/* STATUS */}
                  <td>
                    <span className={`status ${item.status}`}>
                      {item.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="actions">
                    <button
                      className="btn approve"
                      onClick={() => updateStatus(item._id, "approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="btn reject"
                      onClick={() => updateStatus(item._id, "rejected")}
                    >
                      Reject
                    </button>

                    <button
                      className="btn delete"
                      onClick={() => deleteItem(item._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminListings;