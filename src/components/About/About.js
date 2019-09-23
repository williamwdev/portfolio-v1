import React, { Component } from "react";
import "../About/About.css";
import aboutme3 from "../../images/aboutme3.jpg";
import aboutme2 from "../../images/aboutme2.jpg";

export default class About extends Component {
  render() {
    return (
      <section className="about-container">
        <img
          src={aboutme2}
          alt="screenshot of the dashboard of armory squad"
          className="about-ss"
          id="grad-ss"
        />
        <p className="about-me-intro">
          Hi, I'm <span className="strong">William</span> and I'm a Full-Stack
          Web Developer specializing in PostgresQL, Express.js, React.js, and Node.js
          (PERN) stack. Since building my first gaming PC at the age of 12 in
          order to gain a competitive edge in Counter-Strike, I have been
          fascinated by the world of computers. I want to use web development as
          a platform to intermarry my background in Biochemistry and Economics
          with my passion for technology.
          <br />
        </p>
        <hr className="linebreak" />
        <br />

        <img
          src={aboutme3}
          alt="screenshot of the dashboard of armory squad"
          className="about-ss"
          id="pancake-ss"
        />
        <p className="about-me-interests">
          When I am not on my computer, you can find me taking my dog on
          picturesque adventures while satiating my hunger for good food
          wherever I go. When I’m not outside, I can be found engaging in
          competitive gaming and fantasy sports (specifically, basketball and
          football). I believe in lifelong self-development, finding ways to
          maximize efficiency, and following my passion for technology and the
          latest electronic trends.
        </p>
      </section>
    );
  }
}
