import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = { email, password };

    dispatch(login({ formValue, navigate }));
  }
  return (
    <div className="container" style={{ padding: "100px 0" }}>
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-3">
          <form action="">
            <h4 className="mb-3">Login</h4>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
