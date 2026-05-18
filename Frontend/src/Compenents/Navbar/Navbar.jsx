import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
  };

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">

      <nav className="navbar">

        {/* LEFT LOGO GROUP */}
        <div className="nav-group logo-group">
          <h2 onClick={() => goTo("/")}>
            
            RentalHome
          </h2>
        </div>

        {/* CENTER MENU GROUP */}
        <div className={`nav-group center-group ${menuOpen ? "show" : ""}`}>

          <li onClick={() => goTo("/")}>
            Home
          </li>

          <li onClick={() => goTo("/PropertyList")}>
            Rent House
          </li>

          <li onClick={() => goTo("/Favorites")}>
            Favorites
          </li>

          <li onClick={() => goTo("/BookingForm")}>
            Book
          </li>

          <li onClick={() => goTo("/OwnerProductAdd")}>
            Add Property
          </li>

        </div>

        {/* RIGHT BUTTON GROUP */}
        <div className="nav-group right-group">

          {user ? (
            <button className="nav-btn logout" onClick={logout}>
              Logout
            </button>
          ) : (
            <button
              className="nav-btn login"
              onClick={() => goTo("/login")}
            >
              Login
            </button>
          )}

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </nav>

    </div>
  );
};

export default Navbar;