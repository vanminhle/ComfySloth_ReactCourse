import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// using auth0 user than user from context
// import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
