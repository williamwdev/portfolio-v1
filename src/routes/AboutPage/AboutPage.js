import React, { Component } from "react";
import '../AboutPage/AboutPage.css'
import About from '../../components/About/About';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-page-banner">
          <h1 className="about-title">Introduction</h1>
        </div>
        <section className="about-container">
          <About />
        </section>
      </div>
    );
  }
}
