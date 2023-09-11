import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    <InfinitySpin width="200" color="#4fa94d" />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}}></Navigate>;
};

export default PrivateRoute;
