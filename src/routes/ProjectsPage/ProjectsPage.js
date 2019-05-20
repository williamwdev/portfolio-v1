import React, { Component } from "react";
import "../ProjectsPage/ProjectsPage.css";
import Projects from '../../components/Projects/Projects'

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="projectsPage-container">
        <h1>Projects Page</h1>
        <Projects />
      </div>
    );
  }
}
