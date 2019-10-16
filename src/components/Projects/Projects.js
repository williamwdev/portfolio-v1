import React, { Component } from "react";
import armorySS from "../../images/armorySS.JPG";
import happydogSS from "../../images/happydogSS.jpg";
// import bookmarkapp from "../../images/bookmarkappSS.jpg";
import spacedRep from "../../images/spacedRep.jpg";
import "../Projects/Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <section className="armory-project">
          <h2 className="project-name">Squad Armory</h2>
          <p>
            An app for gamers to find friends to play with in their favorite
            online multiplayer game. Create your own squad and find your perfect
            teammates! Whether you're looking for something more casual or more
            competitive, you can be as general or as specific as you'd like when
            creating a squad. Chat with your new squadmates within the app and
            plan out your gaming session.{" "}
          </p>
          <hr className="linebreak" />
          <span className="tech-stack">
            <strong>Built with</strong>: HTML5, CSS3, React.js, Node.js,
            Express.js, , JWT, PostgreSQL, Nodemailer, Mocha/Chai, Supertest,
            Enzyme, Zeit NOW, Heroku and SocketIO{" "}
          </span>
          <a
            href="https://github.com/thinkful-ei-armadillo/The-Armory-Client"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i
              className="fab fa-github fa-lg"
              id="footer-github-icon"
              alt="github"
            />
          </a>
          <a
            href="https://squad-armory.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={armorySS}
              alt="screenshot of the dashboard of armory squad"
              className="project-ss"
            />
          </a>
        </section>

        <section className="spacedrep-project">
          <h2 className="project-name">Spaced Repetition Spanish</h2>
          <p>
            A full-stack app created to help a user learn Spanish vocabulary
            through the use of the spaced repetition technique. Words that you
            get wrong will be seen more frequently than words you get correct
            until you master them all. Implemented using singly linked list and
            completed following strict test specifications.
          </p>
          <hr className="linebreak" />
          <span className="tech-stack">
            <strong>Built with</strong>: HTML5, CSS3, React.js, React Context,
            Node.js, Knex.js, Express.js, JWT, Cypress, Mocha/Chai, Zeit NOW,
            Heroku and PostgreSQL{" "}
          </span>
          <a
            href="https://github.com/dc5will/happydog-client"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i
              className="fab fa-github fa-lg"
              id="footer-github-icon"
              alt="github"
            />
          </a>
          <a
            href="https://spaced-repetition-client-will-hunter.dc5will.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={spacedRep}
              alt="screenshot of the dashboard of spaced rep app"
              className="project-ss"
            />
          </a>
        </section>

        <section className="happydog-project">
          <h2 className="project-name">Happy Dog</h2>
          <p>
            Take the guesswork out of making sure your dogs are happy by keeping
            track of all of their basic needs. Ensure someone in your family
            takes care of your furry friend's basic needs and more. Sometimes
            life is hectic and we're not sure if our furry family members have
            been taken care of. Keep secured important notes and tasks for your
            dog.
          </p>
          <hr className="linebreak" />
          <span className="tech-stack">
            <strong>Built with</strong>: HTML5, CSS3, React.js, Node.js,
            Express.js, JWT, Mocha/Chai, Enzyme, Supertest, and PostgreSQL{" "}
          </span>
          <a
            href="https://github.com/dc5will/happydog-client"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i
              className="fab fa-github fa-lg"
              id="footer-github-icon"
              alt="github"
            />
          </a>
          <a
            href="https://happydog-app.dc5will.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={happydogSS}
              alt="screenshot of the dashboard of happydog app"
              className="project-ss"
            />
          </a>
        </section>

        {/* <section className="bookmarkapp-project">
          <h2 className="project-name">Bookmark App</h2>
          <p>
            This is an web application that allows the users to save/rate their
            favorite bookmarks. The app was bulit so I could have a way to
            consolidate and rate all the sites I frequently visit.{" "}
          </p>
          <hr className="linebreak" />
          <span className="tech-stack">
            <strong>Built with</strong>: HTML, CSS, jQuery, JavaScript, and
            RESTful API{" "}
          </span>
          <a
            href="https://github.com/thinkful-ei-armadillo/will-matt-bookmark"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i
              className="fab fa-github fa-lg"
              id="footer-github-icon"
              alt="github"
            />
          </a>
          <a
            href="https://thinkful-ei-armadillo.github.io/will-matt-bookmark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={bookmarkapp}
              alt="screenshot of the bookmark app"
              className="project-ss"
            />
          </a>
          {/* <br/> */}
        {/* </section> */} */}
      </div>
    );
  }
}
