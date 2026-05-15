import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminUsers.css";
const API = import.meta.env.VITE_API_URL;

const AdminUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [pageLoading, setPageLoading] =
    useState(true);

  const [pageError, setPageError] =
    useState("");

  // FETCH USERS

  const loadUsers = async () => {
    try {
      const response = await axios.get(
        `${API}/users`
      );

      console.log("USERS:", response.data);

      if (Array.isArray(response.data)) {
        setAllUsers(response.data);
      } else {
        setAllUsers([]);
      }
    } catch (error) {
      console.log(error);
      setPageError("Failed to load users");
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // BLOCK / UNBLOCK

  const handleUserBlock = async (id) => {
    try {
      await axios.put(
        `${API}/users/block/${id}`
      );

      setAllUsers((previousUsers) =>
        previousUsers.map((singleUser) =>
          singleUser._id === id
            ? {
                ...singleUser,
                isBlocked:
                  !singleUser.isBlocked,
              }
            : singleUser
        )
      );
    } catch (error) {
      console.log(error);
      alert("Error updating user");
    }
  };

  return (
    <div className="admin-users-table-page">
      <h2 className="admin-users-main-title">
        Manage Users
      </h2>

      {/* LOADING */}

      {pageLoading && (
        <p className="admin-users-message-text">
          Loading users...
        </p>
      )}

      {/* ERROR */}

      {pageError && (
        <p className="admin-users-error-text">
          {pageError}
        </p>
      )}

      {/* EMPTY */}

      {!pageLoading &&
        allUsers.length === 0 && (
          <p className="admin-users-message-text">
            No users found
          </p>
        )}

      {/* TABLE */}

      {!pageLoading &&
        allUsers.length > 0 && (
          <div className="admin-users-table-wrapper">
            <table className="admin-users-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {allUsers.map((user) => (
                  <tr key={user._id}>
                    {/* IMAGE */}

                    <td>
                      <img
                        src={
                          user.image
                            ? `${API}/uploads/${user.image}`
                            : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt="user"
                        className="admin-user-profile-image"
                      />
                    </td>

                    {/* NAME */}

                    <td className="admin-user-name">
                      {user.name}
                    </td>

                    {/* EMAIL */}

                    <td className="admin-user-email">
                      {user.email}
                    </td>

                    {/* STATUS */}

                    <td>
                      <span
                        className={`admin-user-status ${
                          user.isBlocked
                            ? "admin-user-blocked"
                            : "admin-user-active"
                        }`}
                      >
                        {user.isBlocked
                          ? "Blocked"
                          : "Active"}
                      </span>
                    </td>

                    {/* BUTTON */}

                    <td>
                      <button
                        className={`admin-user-action-btn ${
                          user.isBlocked
                            ? "admin-user-unblock-btn"
                            : "admin-user-block-btn"
                        }`}
                        onClick={() =>
                          handleUserBlock(user._id)
                        }
                      >
                        {user.isBlocked
                          ? "Unblock"
                          : "Block"}
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

export default AdminUsers;