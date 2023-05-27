import React from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const username = location.state && location.state.username;
  const [userLoggedIn, setUserLoggedIn] = useState(false); // New state to track user login status

  const handleLogoutClick = () => {
    handleLogout();
    setUserLoggedIn(false); // Reset the user login status
  };

  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 100; // Adjust this value as needed

      if (scrollPosition > threshold) {
        setNavbarColor("white"); // Change to desired color
      } else {
        setNavbarColor("transparent"); // Change to initial color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light p-3"
        style={{ backgroundColor: navbarColor }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Fairytellers
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link
                  class="nav-link mx-2 active"
                  aria-current="page"
                  to="/"
                  style={{ color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link mx-2"
                  to={"/StoriesList"}
                  style={{ color: "black" }}
                >
                  Browse
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link mx-2"
                  to="/About"
                  style={{ color: "black" }}
                >
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
              <li class="nav-item mx-2"></li>
              <li class="nav-item mx-2"></li>
              <li class="nav-item"></li>
            </ul>
          </div>
          {isLoggedIn || userLoggedIn ? (
            <div className="user-info">
              <span>{username}</span>
              <Link to={"/login"}>
                <button
                  class="btn loginBtn"
                  type="submit"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <Link to={"/login"}>
              <button class="btn loginBtn" type="submit">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
