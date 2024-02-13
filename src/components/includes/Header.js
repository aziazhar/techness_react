import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const duration = 500;

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("affix")
      : header.classList.remove("affix");
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="javascript:void(0);">
              <h5 className="text-white mt-3">Techness Solutions</h5>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars text-white"></i>
            </button>

            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="about"
                    spy
                    smooth
                    duration={duration}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="services"
                    spy
                    smooth
                    duration={duration}
                  >
                    Our Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="testimonials"
                    spy
                    smooth
                    duration={duration}
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu submenu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="about-us.html">About Us </a>
                                        <a className="dropdown-item" href="services.html">Our Services </a>
                                        <a className="dropdown-item" href="pricing.html">Our Pricing </a>
                                        <a className="dropdown-item" href="contact-us.html">Contact Us </a>
                                    </div>
                                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="contact"
                    spy
                    smooth
                    duration={duration}
                  >
                    Contact Us
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
