import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Mangas from "../pages/mangas/Mangas";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/',
            element: <Home /> ,
        },
        {
          path: "/mangas",
          element: <Mangas />
      },
        {
            path: "/shop",
            element: <Shop />
        },
        {
            path: "/about",
            element: <About />
        },
        {
          path: "/blog",
          element: <Blog />
      },
      ]
    },
  ]);

  export default router;