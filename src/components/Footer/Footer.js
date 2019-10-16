import React, { Component } from "react";
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../Footer/Footer.css'

const styles = {
  fadeIn: {
    animation: 'x 10s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

export default class Footer extends Component {
  render() {
    return (
      <StyleRoot>
      <div className="footer" style= {styles.fadeIn}>
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
          href="http://www.linkedin.com/in/williamwdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-linkedin-in fa-lg"
            id="footer-linkedin-icon"
            alt="linkedin link"
          />
        </a>
        <a href="mailto:williamwdev@gmail.com">
          <i
            className="fas fa-envelope fa-lg"
            id="footer-email-icon"
            alt="email me link"
          />
        </a>
      </div>
      </StyleRoot>
    );
  }
}
