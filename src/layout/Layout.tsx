import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleGetLocalStorage } from "../helper/Xfunction";
import { USER_LOCAL } from "../utils/constant";
import { isLoginState } from "../store/auth.store";
import { useRecoilState } from "recoil";

const Layout = () => {

  const queryClient = new QueryClient();
  const [_, setIsLogin] = useRecoilState(isLoginState);

  useEffect(() => {
    const checkKeyUser = handleGetLocalStorage(USER_LOCAL.KEY);
    if (checkKeyUser) {
      setIsLogin(true);
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NextUIProvider>
        <Outlet></Outlet>
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default Layout;
