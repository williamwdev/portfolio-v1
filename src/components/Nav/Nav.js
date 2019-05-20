import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
      <nav role="navigation"> 
        <ul className='nav-list'>
          <li className='home-nav'><Link to="/">About</Link></li>
          <li className='projects-nav'><Link to="/projects">Projects</Link></li>
          <li className='resume-nav'><Link to='/resume'>Contact</Link></li>
        </ul> 
      </nav>
    </div>
    )
  }
}