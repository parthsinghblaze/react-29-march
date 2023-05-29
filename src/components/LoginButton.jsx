import React, { useContext } from "react";
import { AppDetails } from "../App";

function LoginButton() {
  const { login, setLogin } = useContext(AppDetails);

  function userLogin() {
    setLogin(true);
    localStorage.setItem("login", "true");
  }

  return (
    <button className="btn btn-success btn-sm" onClick={userLogin}>
      Login
    </button>
  );
}

export default LoginButton;
