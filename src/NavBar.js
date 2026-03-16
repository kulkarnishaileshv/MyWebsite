import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">

      <div className="container">

        <a className="navbar-brand brand-name " href="/home">
          Shailesh Kulkarni
        </a>

        <div className="nav-links">

          <a className="nav-item" href="/services">
            Services
          </a>

          <a className="nav-item" href="/contact">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default NavBar;