import React from "react";
import Navbar from "../component/Navbar";
import Routers from "../routes/Routers";
// import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div className="bg-[#EFE8D1] h-full w-full">
      {/* <Navbar className="" /> */}
      <Routers />

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
