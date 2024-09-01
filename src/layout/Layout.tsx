import { NextUIProvider } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <NextUIProvider>
      <Outlet></Outlet>
    </NextUIProvider>
  );
};

export default Layout;
