import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div className="footer-logo">
            <a href="#home" className="navbar__logo">
              <img
                src="/jrm-logo.png"
                alt="Jesus Reigns Ministries Barcelona"
              />
            </a>
            <p className="footer-about-us">Lorem ipsum</p>
          </div>
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a className="footer-link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link" href="#events">
                  Events
                </a>
              </li>
              <li>
                <a className="footer-link" href="#schedule">
                  Schedule
                </a>
              </li>
              <li>
                <a className="footer-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Links</h3>
            <ul>
              <li>
                <a className="footer-link" href="#home">
                  +34 XXX XXX XXX
                </a>
              </li>
              <li>
                <a className="footer-link" href="#about">
                  info@jesusreignsbarcelona.com
                </a>
              </li>
              <li>
                <a className="footer-link" href="#events">
                  Riereta 4 bajos, Raval, Barcelona
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="legal-container">
            <div>
                © 2025 Jesus Reigns Ministries Barcelona. Todos los derechos reservados.
            </div>
            <div>
                <span>Privacy policy</span>
                <span>Legal notice</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
