import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import path from "../utils/path";
import { Design, Home, Products, SignIn, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: path.HOME, element: <Home /> },
      { path: path.PRODUCTS, element: <Products /> },
      { path: path.DESIGN, element: <Design /> },
      { path: path.SIGN_IN, element: <SignIn /> },
      { path: path.SIGN_UP, element: <SignUp /> },
    ],
  }
]);

export default router;
