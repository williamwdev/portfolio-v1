import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';

export default class HomePage extends Component {
  render() {
    return (
      <main className='homepage-container'>
        <Header />
        <About/>
      </main>
    )
  }
}