import React, { Component } from "react";
import Particles from "react-particles-js";
import Typist from "react-typist";
import NwW from "../../images/NwW.png";
import "../Header/Header.css";
import Footer from '../../components/Footer/Footer'

export default class Header extends Component {
  render() {
    return (
      <header role="banner" className="home-banner">
        <Particles
          height="200px"
          width="300px"
          params={{
            particles: {
              number: {
                value: 400,
                density: {
                  enable: true,
                  value_area: 600
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable_auto: true,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1,
                condensed_mode: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600
                }
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true
                },
                onclick: {
                  enable: true
                },
                resize: true
              }
            },
            retina_detect: true
          }}
        />
        <img
          src={NwW}
          alt="header logo"
          className="header-logo"
          width="150px"
        />
        <Typist avgTypingSpeed={100} startDelay={100} cursor={{ element: "" }}>
          <h1>
            Hello, I'm <span className="banner-name">William Wong.</span>
          </h1>
          <Typist.Delay ms={100} />
          <br />
          <div className="banner-wrapper">
            <p className="banner-subtitle">Full-Stack Web Developer</p>
            <p className="banner-location">Las Vegas</p>
          </div>
          <Footer />
        </Typist>
      </header>
    );
  }
}
