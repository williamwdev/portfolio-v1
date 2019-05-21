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
          <p>An app for gamers to find friends to play with in their favorite online multiplayer game. Create your own squad and find your perfect teammates! Whether you're looking for something more casual or more competitive, you can be as general or as specific as you'd like when creating a squad. Chat with your new squadmates within the app and plan out your gaming session. 
          <br />  
          Created using HTML, CSS, React, Node, Express, PostgreSQL, and SocketIO. </p>
        </section>
        <hr/>

        <section className='happydog-project'>
          <a href='https://happydog-app.dc5will.now.sh' target="_blank" rel="noopener noreferrer">
          <img
            src={happydogSS}
            alt="screenshot of the dashboard of happydog app"
            id="happydog-screencap"
            width='400px'
          />
          </a>
          <p>Take the guesswork out of making sure your dogs are happy by keeping track of all of their basic needs. Ensure someone in your family takes care of your furry friend's basic needs and more. Sometimes life is hectic and we're not sure if our furry family members have been taken care of. Utilize the easy to use daily checklist with your family to make sure someone in your family has fed and/or walked your dog. Keep secured important notes and tasks for your dog. Consolidate notes of your dog's most important needs and assign tasks with dates in order to keep your dog healthy and happy.
          <br />  
          Created using HTML, CSS, React, Node, Express, and PostgreSQL.
          </p>

        </section>
        <hr/>

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