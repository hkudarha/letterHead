import React from "react";
import { Routes, Route } from "react-router-dom";
import { Routers, } from "../constants/router";

import MainLayout from "./layout/MainLayout";

import Home from "../pages/ecom/Home";

import PNF from "../pages/ecom/PNF";



const RouterPage = () => {
  return (
    <Routes>
   
  
      <Route element={<MainLayout />}>
        <Route path={Routers.HOME} element={<Home />} />
       
      </Route>

     
      <Route path="*" element={<PNF />} />
    </Routes>
  );
};

export default RouterPage;
