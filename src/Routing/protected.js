import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return (
    <>{localStorage.getItem("token") ? children : <Navigate to="tologin" />}</>
  );
};

export default ProtectedRoute;
