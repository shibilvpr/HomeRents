import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const currentPage = useLocation();

  return (
    <aside className="admin-sidebar-container">
      <div>
        <h2 className="admin-brand-logo">
          OWNER PANEL
        </h2>

        <nav className="sidebar-navigation-menu">
          <Link
            to="/dashboard"
            className={
              currentPage.pathname === "/dashboard"
                ? "sidebar-link-active"
                : ""
            }
          >
            Dashboard
          </Link>

          <Link
            to="/add-product"
            className={
              currentPage.pathname === "/add-product"
                ? "sidebar-link-active"
                : ""
            }
          >
            Add Product
          </Link>

          <Link
            to="/recycle-bin"
            className={
              currentPage.pathname === "/recycle-bin"
                ? "sidebar-link-active"
                : ""
            }
          >
            Recycle Bin
          </Link>
        </nav>
      </div>

      <p className="sidebar-footer-text">
        Admin System
      </p>
    </aside>
  );
};

export default Sidebar;