import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../providers/PrivateRoute";
import AddTask from "../pages/AddTask";
import ManageTask from "../pages/ManageTask";
import OnGoing from "../pages/OnGoing";
import Completed from "../pages/Completed";
import UpdateTask from "../pages/UpdateTask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        // {
        //     path: "/dashboard",
        //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        // },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
          {
            path: "addTask",
            element: <AddTask></AddTask>
          },
          {
            path: "manageTask",
            element: <ManageTask></ManageTask>
          },
          {
            path: "onGoingTask",
            element: <OnGoing></OnGoing>
          },
          {
            path: "completedTask",
            element: <Completed></Completed>
          },
          {
              path: "updateTask/:id",
              element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
              loader: ({params})=>fetch(`https://scic-job-task-server-gamma.vercel.app/tasks/${params.id}`)
          }
        ]
    }
  ]);

export default router;