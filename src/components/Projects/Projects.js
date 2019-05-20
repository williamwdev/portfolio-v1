import React, { Component } from 'react';
import '../Projects/Projects.css'
import armorySS from '../../images/armorySS.JPG'
import happydogSS from '../../images/happydogSS.jpg'
import bookmarkapp from '../../images/bookmarkappSS.jpg';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        {/* <h2>Projects</h2> */}
        <section className='armory-project'>
          <a href='https://squad-armory.now.sh' target="_blank" rel="noopener noreferrer">
          <img
            src={armorySS}
            alt="screenshot of the dashboard of armory squad"
            id="armory-screencap"
            width='400px'
          />
          </a>
          
        </section>

        <section className='happydog-project'>
          <a href='https://happydog-app.dc5will.now.sh' target="_blank" rel="noopener noreferrer">
          <img
            src={happydogSS}
            alt="screenshot of the dashboard of happydog app"
            id="happydog-screencap"
            width='400px'
          />
          </a>
        </section>

        <section className='bookmarkapp-project'>
          <a href='https://thinkful-ei-armadillo.github.io/will-matt-bookmark/' target="_blank" rel="noopener noreferrer">
          <img
            src={bookmarkapp}
            alt="screenshot of the bookmark app"
            id="bookmarkapp-screencap"
            width='400px'
          />
          </a>
          {/* <br/> */}
          <p>This is an web application that allows the users to save/rate their favorite bookmarks. The app was bulit so I could have a way to consolidate and rate all the sites I frequently visit. It was made with HTML, CSS, and Javascript.</p>
        </section>
      </div>
    )
  }
}