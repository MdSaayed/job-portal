import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from "./Roots/Roots";
import Home from "./Home/Home";
import AppliedJobs from "./Appliedjobs/AppliedJobs";
import Jobs from "./jobs/Jobs";
import ErrorPage from "./ErrorPage/ErrorPage";
import JobDetails from "./jobs/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/applied',
        loader: ()=> fetch('/jobs.json'),
        element: <AppliedJobs />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/job/:id',
        loader: ()=> fetch('../jobs.json'),
        element: <JobDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);