import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import HomePage from '../../routes/HomePage';
import ProjectsPage from '../../routes/ProjectsPage';
import ResumePage from '../../routes/ResumePage';
import Footer from '../Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main role="main">
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/projects"} component={ProjectsPage} />
            <Route exact path={"/resume"} component={ResumePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
