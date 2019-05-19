import React, { Component } from 'react';
import '../Header/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header role='banner' className='home-banner'>
        <h1>William Wong</h1>
        <p>Full Stack Developer</p>
      </header>
    )
  }
}