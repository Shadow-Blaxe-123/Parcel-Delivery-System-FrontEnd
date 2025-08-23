import App from "@/App";
import DashBoard from "@/components/layout/DashBoard";
import AllUsers from "@/pages/Admin/AllUsers";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Unauthorised from "@/pages/Auth/Unauthorised";
import AboutPage from "@/pages/Public/About";
import HomePage from "@/pages/Public/Home";
import { withAuth } from "@/utils/authCheck";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: AboutPage,
        path: "about",
      },
    ],
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Unauthorised,
    path: "/unauthorised",
  },
  {
    Component: withAuth(DashBoard, "ADMIN"),
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to="/admin/users" />,
      },
      {
        path: "users",
        Component: AllUsers,
      },
    ],
  },
  {
    Component: withAuth(DashBoard, "SENDER"),
    path: "/sender",
    children: [
      {
        index: true,
        element: <Navigate to="/sender/createParcel" />,
      },
    ],
  },
  {
    Component: withAuth(DashBoard, "RECEIVER"),
    path: "/receiver",
    children: [
      {
        index: true,
        element: <Navigate to="/receiver/parcelStatus" />,
      },
    ],
  },
]);
