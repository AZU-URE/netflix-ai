import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../page/Login";
import Browse from "../page/Browse";
import Home from "../page/Home";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
