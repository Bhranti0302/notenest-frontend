import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PageLoader from "../loader/PageLoader";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  // Wait until authentication check completes
  if (loading) {
    return <PageLoader />;
  }

  // Allow authenticated users
  // Redirect unauthenticated users to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
