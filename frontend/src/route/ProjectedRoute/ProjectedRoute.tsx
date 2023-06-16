import { Outlet, Navigate } from "react-router-dom";

import path from "../../constants/path";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
const ProjectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />;
};

export default ProjectedRoute;
