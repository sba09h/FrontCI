import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

function ProtectedRoute() {
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;