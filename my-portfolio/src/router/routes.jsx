import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        lazy: () => import("../pages/Home"),
      },
      {
        path: "/about",
        lazy: () => import("../pages/About"),
      },
      {
        path: "/contact",
        lazy: () => import("../pages/Contact"),
      },
      {
        path: "/projects",
        lazy: () => import("../pages/Projects"),
      },
      // ...existing code...
    ],
  },
]);

export default router;
