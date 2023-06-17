import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

function Nav() {
  const data = useLocation();

  const { isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data.pathname === "/login") {
    return null;
  }

  return (
    <div className="container-fluid bg-success">
      <div className="container">
        <nav className="navbar bg-success navbar-expand-lg nav-light">
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
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/cocktail"
                >
                  Cocktail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/product"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            {isLogin ? (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-success btn-sm"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
