import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../../pages/ecom/HomeHeader";
import TopHeader from "../../pages/ecom/TopHeader";
import HomeFooter from "../../pages/ecom/HomeFooter";

const MainLayout = () => {
  return (
    <>
    {/* <TopHeader/>
    <HomeHeader/> */}
    
      <Outlet />

    {/* <HomeFooter/> */}
    </>
  );
};

export default MainLayout;
