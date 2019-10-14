import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import '../HomePage/HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <main className="homepage-container">
        <Header />
        <Footer />
      </main>
    );
  }
}
