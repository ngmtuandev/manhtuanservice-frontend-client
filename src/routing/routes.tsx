import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import path from "../utils/path";
import { Design, Home, Products } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: path.HOME, element: <Home /> },
      { path: path.PRODUCTS, element: <Products /> },
      { path: path.DESIGN, element: <Design /> },
    ],
  }
]);

export default router;
