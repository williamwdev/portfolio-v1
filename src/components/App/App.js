import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../routes/HomePage/HomePage";
import ProjectsPage from "../../routes/ProjectsPage/ProjectsPage";
import AboutPage from "../../routes/AboutPage/AboutPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App/App.css";


function Container ({ location }) {
  return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/projects" component={ProjectsPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default withRouter(Container);