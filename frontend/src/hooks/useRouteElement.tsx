/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import path from "../constants/path";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ProjectedRoute from "../route/ProjectedRoute/ProjectedRoute";
import RejectedRoute from "../route/RejectedRoute/RejectedRoute";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Home from "../pages/Home/Home";

const Register = React.lazy(() => import("../pages/Register/Register"));
const Tv = React.lazy(() => import("../pages/TV/Tv"));
const MoviePage = React.lazy(() => import("../pages/MoviePage/MoviePage"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Login = React.lazy(() => import("../pages/Login/Login"));

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
          element: (
            <Suspense fallback="Loading">
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: path.tv,
      element: (
        <Suspense fallback="Loading">
          <MainLayout>
            <Tv />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: path.movie,
      element: (
        <Suspense fallback="Loading">
          <MainLayout>
            <MoviePage />
          </MainLayout>
        </Suspense>
      ),
    },
    {
      path: path.home,
      element: <RejectedRoute />,
      children: [
        {
          path: path.register,
          element: (
            <Suspense fallback="Loading">
              <AuthLayout>
                <Register />
              </AuthLayout>
            </Suspense>
          ),
        },
        {
          path: path.login,
          element: (
            <Suspense fallback="Loading">
              <AuthLayout>
                <Login />
              </AuthLayout>
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return routeElement;
};

export default useRouteElement;
