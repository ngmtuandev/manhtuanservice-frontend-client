import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={router}></RouterProvider>
  </RecoilRoot>
);
