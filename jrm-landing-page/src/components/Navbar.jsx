import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Close the dropdown everytime we click a link from the menu */
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar__inner" aria-label="Main navigation">
          <a href="#home" className="navbar__logo" onClick={closeMenu}>
            <img src="/jrm-logo.png" alt="Jesus Reigns Ministries Barcelona" />
          </a>

          {/* Phone toggle */}
          <button
            className="navbar__toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            <span className="navbar__toggle-line" aria-hidden="true"></span>
            <span className="navbar__toggle-line" aria-hidden="true"></span>
            <span className="navbar__toggle-line" aria-hidden="true"></span>
          </button>

          {/* Links */}
          <div
            className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
            id="primary-navigation"
          >
            <ul className="navbar__list">
              <li>
                <a className="navbar__link" href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#about" onClick={closeMenu}>
                  About us
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#events" onClick={closeMenu}>
                  Events
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#schedule" onClick={closeMenu}>
                  Schedule
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>

            <a href="#contact" className="button button--primary navbar__cta" onClick={closeMenu}>
              Visit us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
