import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return auth.isLoggedIn ? children : <Navigate to={"/login"} />;
}
