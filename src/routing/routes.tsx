import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import path from "../utils/path";
import { Design, Home, News, ProductDetail, Products, SignIn, SignUp } from "../pages";
import { NewsDetail } from "../components";

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
      { path: path.PRODUCT_DETAIL, element: <ProductDetail /> },
      { path: path.NEWS, element: <News /> },
      { path: path.NEWS_DETAIL, element: <NewsDetail /> },
    ],
  }
]);

export default router;
