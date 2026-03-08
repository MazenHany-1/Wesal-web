import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const AdminRoute = () => {
  const { isLogged, user } = useAuth();

  if (!isLogged) return <Navigate to="/login" replace />;
  if (user?.role !== "admin") return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AdminRoute;