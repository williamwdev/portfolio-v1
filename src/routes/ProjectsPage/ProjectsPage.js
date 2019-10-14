import React, { Component } from "react";
import Projects from "../../components/Projects/Projects";
import "../ProjectsPage/ProjectsPage.css";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="project-page">
        <div className="project-page-banner">
          <h1 className="project-title">Projects</h1>
        </div>
        <section className="projects-container">
          <Projects />
        </section>
      </div>
    );
  }
}
