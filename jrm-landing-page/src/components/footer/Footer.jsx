import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="container">
        <div className='footer-content'>
          <div className="footer-logo">
            <a href="#home">
              <img
                src="/jrm-logo-white.png"
                alt="Jesus Reigns Ministries Barcelona"
              />
            </a>
            <p className="footer-about-us">We are a multicultural Christian church in the heart of Barcelona, growing together in faith, hope, and the love of Jesus.</p>
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
            <h3>Contact</h3>
            <ul className='footer-contact__links'>
              <li>
                <a className="footer-link" href="tel:+34696004975">
                  +34 696 00 49 75
                </a>
              </li>
              <li>
                <a className="footer-link" href="mailto:info@jesusreignsbarcelona.com">
                  info@jesusreignsbarcelona.com
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://maps.app.goo.gl/rJWsMqG4RNkexU1i8" target="_blank">
                  C/ Riereta 4 bajos, Raval, Barcelona
                </a>
              </li>
            </ul>
            <div className='footer-contact__socials'>
              <a href="https://www.facebook.com/JRMBarcelonaSpain/" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@JRMBarcelona" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="legal-container">
            <div>
                © 2025 Jesus Reigns Ministries Barcelona. Todos los derechos reservados.
            </div>
            <div className='legal-docs'>
                <span><a href='#'>Privacy policy</a></span>
                <span><a href='#'>Legal notice</a></span>
            </div>
        </div>
      </div>
    </footer>
  );
};
