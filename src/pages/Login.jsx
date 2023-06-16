import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string()
      .email("Please enter a valid email.")
      .required("Email is required."),
    password: string()
      .max(20, "Password should max of 20 digits")
      .min(8, "Password should min of 8 digits")
      .required("Password is required."),
  });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formValue = { email, password };

  //   dispatch(login({ formValue, navigate }));
  // }

  function formSubmit(value) {
    console.log("value", value);
    dispatch(login({ formValue: value, navigate }));
  }

  return (
    <div className="container" style={{ padding: "100px 0" }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3">
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={formSubmit}
          >
            {() => {
              return (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="email"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage
                      className="text-danger mt-1"
                      name="password"
                      component="div"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>

          {/* <form action="">
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
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
