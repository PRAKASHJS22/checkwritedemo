import { Outlet } from "react-router-dom";
import Headers from "./headers/headers";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Headers />
      <Footer/>
      <Outlet />
    </>
  );
};

export default Layout;