import React, { Component } from "react";
import { Link } from "react-router-dom";
import NwW from "../../images/NwW.png";
import "../Nav/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav role="navigation">
          <div className="logo">
            <Link to="/">
              <img
                src={NwW}
                alt="screenshot of the dashboard of armory squad"
                className="nav-logo"
                height="75px"
              />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="home-nav">
              <Link to="/about">About</Link>
            </li>
            <li className="projects-nav">
              <Link to="/projects">Projects</Link>
            </li>
            <a
              href="https://github.com/dc5will"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github fa-lg"
                id="footer-github-icon"
                alt="github"
              />
            </a>
            <a
              href="http://www.linkedin.com/in/williamwdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin-in fa-lg"
                id="footer-linkedin-icon"
                alt="linkedin link"
              />
            </a>
            <a
              href="https://resume.creddle.io/resume/e7prxj1wpof"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fas fa-file fa-lg"
                id="footer-resume-icon"
                alt="resume link"
              />
            </a>
            <a href="mailto:williamwdev@gmail.com">
              <i
                className="fas fa-envelope fa-lg"
                id="footer-email-icon"
                alt="email me link"
              />
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}
