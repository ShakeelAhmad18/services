import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className="header-area header-1" style={{backgroundColor:'white', fontFamily:'bold'}}>
  {/* Start mobile menu */}
  <div className="mobile-menu">
    <div className="container">
      <div className="mobile-menu-wrapper" />
    </div>
  </div>
  {/* End mobile menu */}
  <div className="main-responsive-nav">
    <div className="container">
      {/* Mobile Logo */}
      <div className="logo">
        <Link to="/" target="_self" title="Superv">
          <img src="assets/images/logo/logo1.png" alt="Brand logo" />
        </Link>
      </div>
      {/* Menu toggle button */}
      <button className="menu-toggler" type="button">
        <span />
        <span />
        <span />
      </button>
    </div>
  </div>
  <div className="main-navbar">
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        {/* Logo */}
        <Link className="navbar-brand" to="/" target="_self" title="Superv">
          <img src="assets/images/logo/logo1.png" alt="Brand Logo" />
        </Link>
        {/* Navigation items */}
        <div className="collapse navbar-collapse">
          <ul id="mainMenu" className="navbar-nav mobile-item mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link toggle">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link toggle" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link toggle" to="/vendors">Vendors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link toggle" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="more-option mobile-item">
          <div className="item">
            <Link to="/login" className="btn btn-md btn-primary btn-gradient icon-start" title="Login" target="_self"><i className="fal fa-sign-in-alt" /> Login</Link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>

  )
}

export default Navbar
