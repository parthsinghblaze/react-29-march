import React, { useContext } from "react";
import { AppDetails } from "../App";
import { useNavigate } from "react-router-dom";
import { Button, ThemeProvider } from "react-bootstrap";

function LoginButton() {
  const { login, setLogin } = useContext(AppDetails);
  const navigate = useNavigate();

  function userLogin() {
    setLogin(true);
    localStorage.setItem("login", "true");
    // you have this code here!
    navigate("/");
  }

  const myBtn = {
    padding: "20px",
  };

  return (
    <>
      <button className="btn btn-success btn-sm" onClick={userLogin}>
        Login
      </button>
      <Button variant="success" size="sm">
        Login
      </Button>
    </>
  );
}

export default LoginButton;
