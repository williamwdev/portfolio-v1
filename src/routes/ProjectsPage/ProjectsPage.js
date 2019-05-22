import React, { Component } from "react";
import "../ProjectsPage/ProjectsPage.css";
import Projects from "../../components/Projects/Projects";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="project-page-banner">
          <h1 className="project-title">PROJECTS</h1>
        </div>
        <section className="projects-container">
          <Projects />
        </section>
      </div>
    );
  }
}
