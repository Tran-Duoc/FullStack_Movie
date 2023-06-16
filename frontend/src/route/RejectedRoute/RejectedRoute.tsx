import { Outlet, Navigate } from "react-router-dom";
import path from "../../constants/path";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />;
};

export default RejectedRoute;
