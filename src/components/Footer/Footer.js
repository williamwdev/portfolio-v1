import React, { Component } from "react";
import '../Footer/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/dc5will"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-github fa-lg"
            id="footer-github-icon"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/william-wong-6869a257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin-in fa-lg"
            id="footer-linkedin-icon"
            alt="linkedin link"
          />
        </a>
        <a href="mailto:wwong1987@gmail.com">
          <i
            className="fas fa-paper-plane fa-lg"
            id="footer-email-icon"
            alt="email me link"
          />
        </a>
      </div>
    );
  }
}
