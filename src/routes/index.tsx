import App from "@/App";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import AboutPage from "@/pages/Public/About";
import HomePage from "@/pages/Public/Home";
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
]);
