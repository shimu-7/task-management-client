import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

export default router;