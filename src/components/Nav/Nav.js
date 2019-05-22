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
              <Link to="/">About</Link>
            </li>
            <li className="projects-nav">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="resume-nav">
              <Link to="/resume">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
