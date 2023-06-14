import { useRoutes } from "react-router-dom";
import path from "../constants/path";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ProjectedRoute from "../route/ProjectedRoute/ProjectedRoute";
import RejectedRoute from "../route/RejectedRoute/RejectedRoute";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Tv from "../pages/TV/Tv";
import MoviePage from "../pages/MoviePage/MoviePage";

const useRouteElement = () => {
  const routeElement = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },

    {
      path: path.home,
      element: <ProjectedRoute />,
      children: [
        {
          path: path.profile,
          element: <Profile />,
        },
      ],
    },
    {
      path: path.tv,
      element: (
        <MainLayout>
          <Tv />
        </MainLayout>
      ),
    },
    {
      path: path.movie,
      element: (
        <MainLayout>
          <MoviePage />
        </MainLayout>
      ),
    },
    {
      path: path.home,
      element: <RejectedRoute />,
      children: [
        {
          path: path.register,
          element: (
            <AuthLayout>
              <Register />
            </AuthLayout>
          ),
        },
        {
          path: path.login,
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          ),
        },
      ],
    },
  ]);

  return routeElement;
};

export default useRouteElement;
