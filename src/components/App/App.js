import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import HomePage from "../../routes/HomePage/HomePage";
import ProjectsPage from "../../routes/ProjectsPage/ProjectsPage";
import AboutPage from "../../routes/AboutPage/AboutPage";
import Footer from "../../components/Footer/Footer";
import { spring, AnimatedSwitch } from "react-router-transition";
import "../App/App.css";

export default class App extends Component {
  render() {

    function bounce(val) {
      return spring(val, {
        stiffness: 350,
        damping: 20
      });
    }

    const bounceTransition = {
      atEnter: {
        opacity: 0,
        scale: 1.2
      },
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0)
      },
      atActive: {
        opacity: bounce(1),
        scale: bounce(1)
      }
    };
    return (
      <Router>
        <div className="App">
          <main role="main">
            <Nav />
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
            >
              <Route exact path={"/"} component={HomePage} />
              <Route exact path={"/about"} component={AboutPage} />
              <Route exact path={"/projects"} component={ProjectsPage} />
            </AnimatedSwitch>
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}
