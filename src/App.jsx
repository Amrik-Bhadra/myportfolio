import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OpenningPage from "./pages/OpenningPage";
import MyPortfolio from "./pages/MyPortfolio";

const App = () => {
  const routes = createBrowserRouter([
    { path: '/', element: <OpenningPage/> },
    { path: '/portfolio', element: <MyPortfolio/> }
  ]);

  return (
    <RouterProvider router={routes}/>
  );
};

export default App;
