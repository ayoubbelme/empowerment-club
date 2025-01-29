import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    // Ensure the hamburger button and menu are reset to default on page load
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");
    if (navbarToggler && navbarMenu) {
      navbarToggler.classList.add("collapsed");
      navbarMenu.classList.remove("show");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className="capital first">E</span>M<span className="capital">POWER</span>MENT
        </a>
        <button
          className="navbar-toggler custom-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="animated-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Add mx-auto for Bootstrap centering */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
              Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#activities">
                Activities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
