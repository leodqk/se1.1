import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isLoggedin } = useSelector((state) => state.auth);
  if (!isLoggedin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
