import React, { Component } from 'react';
import '../Header/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header role='banner' className='home-banner'>
        <h1>Hello, I'm <span className='header-name'>William Wong.</span></h1>
        <p>Full stack developer</p>
      </header>
    )
  }
}