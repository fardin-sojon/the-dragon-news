import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";
import Career from "../Pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path:"",
        Component: Home
      },
      {
        path:"/about",
        Component: About
      },
      {
        path:"/career",
        Component: Career
      },
      {
        path:"/category/:id",
        loader: ()=> fetch("/news.json"),
        Component: CategoryNews
      },
    ]
  },
  {
    path: "/auth",
    element: <h3>Authentication Layout</h3>,
  },
  {
    path: "/news",
    element: <h3>News Layout</h3>,
  },
  {
    path: "/*",
    element: <h3>Error 404</h3>,
  },
]);

export default router;
