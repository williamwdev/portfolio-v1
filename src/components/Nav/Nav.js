import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import ww from "../../images/ww.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav role="navigation">
          <div className="logo">
            <Link to="/">
              <img
                src={ww}
                alt="screenshot of the dashboard of armory squad"
                className="nav-logo"
                height="50px"
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
              href="https://www.linkedin.com/in/william-wong-6869a257/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i
                className="fab fa-linkedin-in fa-lg"
                id="footer-linkedin-icon"
                alt="linkedin link"
                />
            </a>
            <a href="mailto:wwong1987@gmail.com">
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
