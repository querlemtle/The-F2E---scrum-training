import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import Loading from "./routes/Loading/Loading";
import Start from "./routes/Start/Start";
import Story from "./routes/Story/Story";
import IntroBacklog from "./routes/Intros/IntroBacklog";
import Task from "./routes/Task/Task";

const router = createHashRouter([
  {
    path: "/",
    element: <Start />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/intro/1",
    element: <IntroBacklog />,
  },
  {
    path: "/task",
    element: <Task />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
