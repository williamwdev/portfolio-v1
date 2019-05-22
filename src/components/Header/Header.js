import React, { Component } from 'react';
import '../Header/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header role='banner' className='home-banner'>
        <h1>Hello, I'm <span className='banner-name'>William Wong.</span></h1>
        <span className='banner-subtitle'>Full stack developer based in San Diego</span>
      </header>
    )
  }
}