import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../Compenents/AdminLayout/AdminLayout";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBlock = async (id) => {
    await axios.put(`http://localhost:5000/api/admin/block/${id}`);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/user/${id}`);
    fetchUsers();
  };

  return (
    <div>
       
      <h2>Manage Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.isBlocked ? "Blocked" : "Active"}</td>

              <td>
                <button onClick={() => toggleBlock(u._id)}>
                  {u.isBlocked ? "Unblock" : "Block"}
                </button>

                <button onClick={() => deleteUser(u._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;