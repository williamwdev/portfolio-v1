import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import HomePage from "../../routes/HomePage/HomePage";
import ProjectsPage from "../../routes/ProjectsPage/ProjectsPage";
import ResumePage from "../../routes/ResumePage/ResumePage";
import Footer from "../Footer/Footer";
import '../App/App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <main role="main">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/about"} component={ResumePage} />
            <Route exact path={"/projects"} component={ProjectsPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
