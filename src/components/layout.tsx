import { Outlet } from "react-router-dom";
import Headers from "./headers/headers";
import Footer from "./Footer";
import NmsProduction_Accounting from "./nms";
import { CustomDropDown } from "./customDropDown";

const Layout = () => {
  return (
    <>
      <Headers />
      <NmsProduction_Accounting/>
      <CustomDropDown/>
      {/* <Footer/> */}
      <Outlet />
    </>
  );
};

export default Layout;