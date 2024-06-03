import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import Footer from "./Footer";
export default function MainLayout() {
  return (
    <>
      <div className="">
        <HeaderLayout />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
