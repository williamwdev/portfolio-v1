import React, { Component } from "react";
import Typist from "react-typist";
import About from "../../components/About/About";
import "../AboutPage/AboutPage.css";

export default class AboutPage extends Component {
  render() {
    return (
      <>
      <div className="about-page">
        <div className="about-page-banner">
          <Typist avgTypingSpeed={70} startDelay={500} cursor={{ element: "" }}>
            <h1 className="about-title">Introduction</h1>
          </Typist>
        </div>
        <section className="about-container">
          <About />
        </section>
      </div>
      </>
    );
  }
}
