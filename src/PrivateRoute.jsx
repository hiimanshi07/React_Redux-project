import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { isLoggedIn } from "./PublicRoute";

function PrivateRoute() {
  const isLoggedIn = localStorage.getItem("auth");

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;



