import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Firebase এখনো user check করছে
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // User login না করলে Login page-এ পাঠাবে
  // সাথে যে route-এ যেতে চেয়েছিল সেটাও মনে রাখবে
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // User logged in থাকলে requested page দেখাবে
  return children;
};

export default PrivateRoute;