import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import path from "../../constants/path";
const RejectedRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />;
};

export default RejectedRoute;
