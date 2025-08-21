import App from "@/App";
import Register from "@/pages/Auth/Register";
import HomePage from "@/pages/Public/HomePage";
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
    ],
  },
  {
    Component: Register,
    path: "/register",
  },
]);
