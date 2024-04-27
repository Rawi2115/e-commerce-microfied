import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";

export default function MainLayout() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
    </>
  );
}
