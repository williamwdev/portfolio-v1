import React, { Component } from "react";
import "../About/About.css";

export default class About extends Component {
  render() {
    return (
      <section className="about-container">
        <p className="about-me-intro">
          Hi, I'm <span className='strong'>William</span> and I'm a Full-Stack Web Developer currently living in San Diego. Since building my
          first gaming PC at the age of 12 in order to gain a competitive edge
          in Counter-Strike, I have been fascinated by the world of computers. I
          want to use web development as a platform to intermarry my background
          in Biochemistry and Economics with my passion for technology.
          </p>
          <br />

          <p className='about-me-interests'>
          Based in sunny San Diego, you’ll find me taking my dog on picturesque
          adventures while satiating my hunger for good food wherever I go. When
          I’m not outside, I can be found engaging in competitive gaming and
          fantasy sports (specifically, basketball and football). I believe in
          lifelong self-development, finding ways to maximize efficiency, and
          following my passion for technology and the latest electronic trends.
        </p>
      </section>
    );
  }
}
