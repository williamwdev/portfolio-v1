import React, { Component } from "react";
import { Link } from "react-router-dom";
import NwW from "../../images/NwW.png";
import "../Nav/Nav.css";

export default class Nav extends Component {
  componentDidMount() {
    let mainNav = document.getElementById("js-menu");
    let navBarToggle = document.getElementById("js-navbar-toggle");

    navBarToggle.addEventListener("click", function() {
      mainNav.classList.toggle("active");
    });
  }

  render() {
    return (
      // <div className="nav-container">
      <nav className="navbar" role="navigation">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars" id='hamburger-icon'></i>
        </span>

        {/* <div className="logo"> */}
          <Link to="/">
            <img
              src={NwW}
              alt="screenshot of the dashboard of armory squad"
              className="nav-logo"
              height="75px"
            />
          </Link>
        {/* </div> */}
        <ul className="main-nav" id="js-menu">
          <li className="home-nav">
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li className="projects-nav">
            <Link className="nav-links" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/dc5will"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links"
            >
              <i
                className="fab fa-github fa-lg"
                id="footer-github-icon"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/williamwdev"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links"
            >
              <i
                className="fab fa-linkedin-in fa-lg"
                id="footer-linkedin-icon"
                alt="linkedin link"
              />
            </a>
          </li>
          <li>
            <a
              href="https://resume.creddle.io/resume/e7prxj1wpof"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links"
            >
              <i
                className="fas fa-file fa-lg"
                id="footer-resume-icon"
                alt="resume link"
              />
            </a>
          </li>
          <li>
            <a href="mailto:williamwdev@gmail.com" className="nav-links">
              <i
                className="fas fa-envelope fa-lg"
                id="footer-email-icon"
                alt="email me link"
              />
            </a>
          </li>
        </ul>
      </nav>
      // </div>
    );
  }
}
