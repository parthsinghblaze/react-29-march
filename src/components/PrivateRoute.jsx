import React, { useContext } from "react";
import { AppDetails } from "../App";
import Container from "./Container";
import LoginButton from "./LoginButton";

function PrivateRoute({ children }) {
  const { login, setLogin } = useContext(AppDetails);

  if (login) {
    return children;
  }

  return (
    <Container>
      <h5>Please Login</h5>
      <LoginButton />
    </Container>
  );
}

export default PrivateRoute;
