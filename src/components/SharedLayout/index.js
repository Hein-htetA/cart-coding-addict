import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../HeaderBar";
import Total from "../Total";

const SharedLayout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <Total />
    </>
  );
};

export default SharedLayout;
