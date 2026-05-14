import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">

        {/* LEFT SIDE */}
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
         
          <li onClick={() => navigate("/PropertyList")}>Rent House</li>
          <li onClick={() => navigate("/Favorites")}>Faveroites</li>
           <li onClick={() => navigate("/BookingForm")}>Book</li>
           <li onClick={() => navigate("/OwnerProductAdd")}>Add Propperty</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          {user ? (
            <>
              {/* <span className="user-name">Welcome {user.name}</span> */}
              <button className="nav-btn logout" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <button
              className="nav-btn login"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;