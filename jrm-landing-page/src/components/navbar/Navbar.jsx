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
                <a className="navbar__link" href="#where-we-are" onClick={closeMenu}>
                  Where we are
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#our-mission" onClick={closeMenu}>
                  Our mission
                </a>
              </li>
              <li>
                <a className="navbar__link" href="#get-involved" onClick={closeMenu}>
                  Get involved
                </a>
              </li>
            </ul>

            <a href="#where-we-are" className="button button--primary navbar__cta" onClick={closeMenu}>
              Visit us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
