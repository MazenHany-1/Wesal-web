import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProtectedRoute = () => {
  const { isLogged } = useAuth();

  return isLogged ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;