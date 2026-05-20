import { Outlet, useNavigate, Link } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="control-panel-layout">
      {/* SIDEBAR */}

      <aside className="control-sidebar-wrapper">
        <div>
          <h2 className="control-sidebar-logo">
            Admin Panel
          </h2>

          <ul className="control-navigation-list">
            <li>
              <Link to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/admin/users">
                Users
              </Link>
            </li>

            <li>
              <Link to="/admin/listings">
                Listings
              </Link>
            </li>

            <li>
              <Link to="/admin/manage-users">
                Manage Users
              </Link>
            </li>

            <li>
              <Link to="/admin/manage-properties">
                Properties
              </Link>
            </li>

            <li>
              <Link to="/admin/bookings">
                Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div className="control-sidebar-footer">
          <p>{currentUser?.name}</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main className="control-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;