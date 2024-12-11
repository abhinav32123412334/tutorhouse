import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Loginbtn from "@mui/material/Button";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <section className="header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={Logo} alt={Logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"about-us"}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"find-tutor"}>
                  Find Tutor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"contact-us"}>
                  Contact us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tutoring
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Subjects
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
            <Link to={"about-us"} style={{ textDecoration: "none" }}>
              <Loginbtn
                variant="contained"
                sx={{
                  backgroundColor: "#4E0961", // Primary color
                  color: "#fff",
                  padding: "10px 25px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  boxShadow: "none",
                  width: "fit-content",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#4e0961e0",
                    boxShadow: "none", // Darker shade on hover
                  },
                }}
              >
                Login or Signup
              </Loginbtn>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
