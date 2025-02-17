import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../page/Login";
import Browse from "../page/Browse";
import Home from "../page/Home";
import GptSearch from "../page/GptSearch";
import Footer from "./Footer";

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
    {
      path: "/search",
      element: <GptSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default Body;
