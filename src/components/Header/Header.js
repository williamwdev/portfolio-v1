import React, { Component } from "react";
import "../Header/Header.css";
import NwW from "../../images/NwW.png";
import Particles from "react-particles-js";
import Typist from "react-typist";

export default class Header extends Component {
  render() {
    return (
      <header role="banner" className="home-banner">
        <Particles height="250px" />
        <img
          src={NwW}
          alt="header logo"
          className="header-logo"
          width="150px"
        />
        <Typist avgTypingSpeed={70} startDelay={500} cursor={{ element: "" }}>
          <h1>
            Hello, I'm <span className="banner-name">William Wong.</span>
          </h1>
          <Typist.Delay ms={500} />
          <br />
          <p className="banner-subtitle">Full-Stack Web Developer</p>
          <p className="banner-location">San Diego | Las Vegas</p>
        </Typist>
      </header>
    );
  }
}
