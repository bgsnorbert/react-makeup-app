import React from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import HeartIcon from "./Icons/HeartIcon";
import CartIcon from "./Icons/CartIcon";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Brand classes="text-center" smallBrand="text-secondary" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    style={linkStyle}
                    to="/react-makeup-app/shop"
                    className="nav-link px-4 py-3 text-dark"
                  >
                    Shop
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link px-4 py-3 text-dark"
                    to="/react-makeup-app/search"
                  >
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={linkStyle}
                    to="/react-makeup-app/about"
                    className="nav-link px-4 py-3 text-dark"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item ms-4 px-3 py-3">
                  <HeartIcon />
                </li>
                <li className="nav-item px-3 py-3">
                  <CartIcon />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
