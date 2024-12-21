import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header-area header-1" style={{ backgroundColor: 'white', fontFamily: 'bold' }}>
      {/* Mobile Navigation */}
      <div className="main-responsive-nav">
        <div className="container">
          {/* Mobile Logo */}
          <div className="logo">
            <Link to="/" title="Superv">
              <img src="assets/images/logo/logo1.png" alt="Brand logo" />
            </Link>
          </div>
          {/* Menu Toggle Button */}
          <button
            className="menu-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className={`main-navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            {/* Logo */}
            <Link className="navbar-brand" to="/" title="Superv">
              <img src="assets/images/logo/logo1.png" alt="Brand Logo" />
            </Link>

            {/* Navigation Menu */}
            <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
              <ul id="mainMenu" className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/vendors" className="nav-link">Vendors</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>

            {/* Additional Options */}
            <div className="more-option mobile-item">
              <Link to="/login" className="btn btn-md btn-primary btn-gradient icon-start" title="Login">
                <i className="fal fa-sign-in-alt" /> Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
