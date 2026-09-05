import './Footer.css';

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
            <div className='legal-docs'>
                <span><a href='#'>Privacy policy</a></span>
                <span><a href='#'>Legal notice</a></span>
            </div>
        </div>
      </div>
    </footer>
  );
};
