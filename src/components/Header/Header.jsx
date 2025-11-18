import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaCode,
  FaRegFolder,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.css"; // Make sure to create this CSS file
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, href: "#hero", icon: <FaHome />, text: "Home" },
    { id: 2, href: "#about", icon: <FaUser />, text: "About" },
    { id: 3, href: "#services", icon: <FaCog />, text: "Services" },
    { id: 4, href: "#skills", icon: <FaCode />, text: "Skills" },
    { id: 5, href: "#portfolio", icon: <FaRegFolder />, text: "Portfolio" },
    { id: 6, href: "#contact", icon: <FaEnvelope />, text: "Contact" },
  ];

  return (
    <header className={`c-header ${isMenuOpen ? "c-header--menu-open" : ""}`}>
      <div className="c-header__container">
        {/* Logo */}
        <a href="#hero" className="c-header__logo">
          <span className="c-header__logo-mark">D</span>
          <span className="c-header__logo-text">ejen</span>
        </a>

        {/* Navigation */}
        <nav
          className={`c-header__nav ${
            isMenuOpen ? "c-header__nav--active" : ""
          }`}
        >
          <ul className="c-header__nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="c-header__nav-item">
                <a
                  href={item.href}
                  className="c-header__nav-link"
                  onClick={() => setIsMenuOpen(false)} // close mobile menu after click
                >
                  <span className="c-header__nav-icon">{item.icon}</span>
                  <span className="c-header__nav-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`c-header__mobile-toggle ${
            isMenuOpen ? "c-header__mobile-toggle--active" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="c-header__hamburger-line"></span>
          <span className="c-header__hamburger-line"></span>
          <span className="c-header__hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
