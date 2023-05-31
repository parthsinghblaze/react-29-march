import React, { useState } from "react";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import LoginButton from "../components/LoginButton";

function Login() {
  return (
    <Container>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3 py-5 px-4 border border-2 shadow">
          <h5 className="text-center text-primary mb-5">Login</h5>
          {/* <form action=""> */}
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <LoginButton />
          {/* </form> */}
        </div>
      </div>
    </Container>
  );
}

export default Login;
