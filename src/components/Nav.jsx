import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppDetails } from "../App";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginButton from "./LoginButton";

function Nav() {
  const { login, setLogin, cart } = useContext(AppDetails);

  function logOut() {
    setLogin(false);
    localStorage.removeItem("login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cocktails" className="nav-link">
                Cocktail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className="nav-link">
                Support
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
          <div>
            <button
              type="button"
              className="btn btn-dark btn-sm me-3 position-relative"
            >
              <AiOutlineShoppingCart />
              <span
                className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "26px", height: "26px" }}
              >
                {cart.length}
              </span>
            </button>
            {login ? (
              <button className="btn btn-sm btn-danger" onClick={logOut}>
                Logout
              </button>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
