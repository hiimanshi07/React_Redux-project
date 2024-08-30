import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const isLoggedIn = () => {
  localStorage.getItem("auth");
  //   let data = localStorage.getItem("auth");
  //   if (data != null) return true;
  //   else return false;
};
function PublicRoute() {
  const isLoggedIn = localStorage.getItem("auth");
  return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default PublicRoute;
