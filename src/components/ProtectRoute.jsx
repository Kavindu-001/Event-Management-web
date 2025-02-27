import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem("role");

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/Signin" />;
};


export default ProtectRoute
