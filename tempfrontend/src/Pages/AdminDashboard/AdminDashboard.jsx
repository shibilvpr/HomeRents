import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
const API = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] =
    useState(null);

  useEffect(() => {
    const loadDashboardStats = async () => {
      try {
        const response = await axios.get(
          `${API}/admin/stats`
        );

        setDashboardData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadDashboardStats();
  }, []);

  return (
    <div className="dashboard-screen-wrapper">
      <h2 className="dashboard-main-heading">
        Admin Dashboard
      </h2>

      {!dashboardData ? (
        <p className="dashboard-loading-text">
          Loading...
        </p>
      ) : (
        <div className="dashboard-stats-grid">
          {/* USERS */}
          <div className="dashboard-info-card">
            <h3 className="dashboard-count-number">
              {dashboardData.users}
            </h3>

            <p className="dashboard-count-label">
              Users
            </p>
          </div>

          {/* LISTINGS */}
          <div className="dashboard-info-card">
            <h3 className="dashboard-count-number">
              {dashboardData.listings}
            </h3>

            <p className="dashboard-count-label">
              Listings
            </p>
          </div>

          {/* APPROVED */}
          <div className="dashboard-info-card">
            <h3 className="dashboard-count-number">
              {dashboardData.approved}
            </h3>

            <p className="dashboard-count-label">
              Approved
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;