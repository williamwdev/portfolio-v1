import React, { Component } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import '../HomePage/HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <main className="homepage-container">
        <Header />
        {/* <section className="project-container">
          <Projects />
        </section> */}
      </main>
    );
  }
}
