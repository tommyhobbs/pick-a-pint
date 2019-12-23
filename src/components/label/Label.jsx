import React from 'react';
import linkedIn from "../../assets/LinkedIn-66px.png";
import gitHub from "../../assets/GitHub-64px.png";
import "./Label.css";

const Label = () => (
  <div className="Label">
    <a
      href="https://www.linkedin.com/in/tommyhobbs/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={linkedIn}
        className="logo"
        alt="LinkedIn Logo"
      />
    </a>
    <a
      href="https://github.com/tommyhobbs/pick-a-pint"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={gitHub} className="logo" alt="GitHub Logo" />
    </a>
    <p>a silly idea by Tom Hobbs </p>
  </div>)

export default Label;