import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Container from "./components/App/App";
import Nav from "./components/Nav/Nav";

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Container />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
