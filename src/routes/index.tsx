import App from "@/App";
import DashBoard from "@/components/layout/DashBoard";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Unauthorised from "@/pages/Auth/Unauthorised";
import AboutPage from "@/pages/Public/About";
import HomePage from "@/pages/Public/Home";
import { withAuth } from "@/utils/authCheck";
import { createBrowserRouter } from "react-router";

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
        element: <div>Dashboard</div>,
      },
    ],
  },
]);
