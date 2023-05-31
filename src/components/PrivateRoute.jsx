import React, { useContext } from "react";
import { AppDetails } from "../App";
import Container from "./Container";
import LoginButton from "./LoginButton";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { login, setLogin } = useContext(AppDetails);

  if (login) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
