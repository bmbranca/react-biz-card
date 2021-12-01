import React from "react";
import image from "./Brian.jpg";

export default function Info() {
  return (
    <div className="info-container">
      <div>
        <img className="img" src={image} alt="Brian Branca" />
      </div>
      <div className="info-container">
        <h1 className="name">Brian Branca</h1>
        <small className="title">Frontend Web Developer</small>
        <a className="email-link" href="mailto:brianbranca16@gmail.com">
          bbranca.io
        </a>
      </div>
      <div className="button-container">
        <a
          className="btn email-btn"
          href="mailto:brianbranca16@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a
          className="btn linked-btn"
          href="https://www.linkedin.com/in/brian-branca-25aa58161/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
