import { createBrowserRouter } from "react-router-dom";

import { Home, Login } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/redux-example-01/",
    element: <Home />,
  },
  {
    path: "/redux-example-01/login",
    element: <Login />,
  },
]);
