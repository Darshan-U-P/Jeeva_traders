import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="home-header">
      <img
        src="/assets/images/jeeva traders logo.png"
        alt="Jeeva Traders Logo"
        className="logo"
      />
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li><Link to="/customer-login" onClick={closeMenu}>Customer Login</Link></li>
          <li><Link to="/promoting-partner-login" onClick={closeMenu}>Promoting Partner Login</Link></li>
        </ul>
      </nav>
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </header>
  );
}

export default Navbar;
