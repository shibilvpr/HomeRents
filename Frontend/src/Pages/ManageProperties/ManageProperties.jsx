import { useEffect, useState } from "react";
import axios from "axios";


const ManageProperties = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/listings");
    setListings(res.data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/admin/listings/${id}`, { status });
    fetchListings();
  };

  const deleteListing = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/listings/${id}`);
    fetchListings();
  };

  return (
    <div>
     
      <h2>Manage Properties</h2>

      {listings.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>Status: {item.status}</p>

          <button onClick={() => updateStatus(item._id, "approved")}>
            Approve
          </button>

          <button onClick={() => updateStatus(item._id, "rejected")}>
            {/* Reject */}
          </button>

          <button onClick={() => deleteListing(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageProperties;