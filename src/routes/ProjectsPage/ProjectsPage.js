import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import Typist from "react-typist";
import "../ProjectsPage/ProjectsPage.css";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="project-page-banner">
          {/* <Typist avgTypingSpeed={70} startDelay={500} cursor={{ element: "" }}> */}
            <h1 className="project-title">Projects</h1>
          {/* </Typist> */}
        </div>
        <section className="projects-container">
          <Projects />
        </section>
      </div>
    );
  }
}
