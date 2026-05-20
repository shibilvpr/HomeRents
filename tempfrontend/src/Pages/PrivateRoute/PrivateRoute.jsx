import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login"/>;
  }

  // ❌ Role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/login"/>;
  }

  // ✅ Allowed
  return children;
};

export default PrivateRoute;