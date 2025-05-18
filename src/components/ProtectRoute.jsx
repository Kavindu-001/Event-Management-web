import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem('role');
  console.log('ProtectRoute: userRole:', userRole, 'allowedRoles:', allowedRoles); // Debug

  // Normalize roles to lowercase for comparison
  const normalizedUserRole = userRole ? userRole.toLowerCase() : null;
  const normalizedAllowedRoles = allowedRoles.map(role => role.toLowerCase());

  if (!normalizedUserRole || !normalizedAllowedRoles.includes(normalizedUserRole)) {
    console.warn('ProtectRoute: Access denied, redirecting to /SignIn');
    return <Navigate to="/SignIn" replace />;
  }

  return <Outlet />;
};

export default ProtectRoute;