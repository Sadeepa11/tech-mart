// RoofmartNavbar.jsx
import { useState } from 'react';
import './Navbar.css';

import logo from './assets/Logo/logo.jpeg';

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Top red bar */}
      <div className="top-red-line"></div>

      <div className="navbar-content">
        {/* Logo section with red background */}
        <div className="logo-container">
          <div className="logo-box">
            <img src={logo} alt="Techmart Logo" className="logo-image" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className="mobile-menu-line"></div>
          <div className="mobile-menu-line"></div>
          <div className="mobile-menu-line"></div>
        </button>

        {/* Navigation links */}
        <nav className={`navbar-navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item active">
              <a href="#" className="nav-link">HOME</a>
            </li>

            {/* Our Scope Dropdown */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown(0, e)}>
                Our Scope <span className="dropdown-arrow">▼</span>
              </a>
              {activeDropdown === 0 && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Warehouses</a>
                  <a href="#" className="dropdown-item">Factories</a>
                  <a href="#" className="dropdown-item">Stories</a>
                  <a href="#" className="dropdown-item">Steel Bridges</a>
                  <a href="#" className="dropdown-item">Mezzanine Floors</a>
                  <a href="#" className="dropdown-item">Roof Structures</a>
                  <a href="#" className="dropdown-item">Car Park Shades</a>
                  <a href="#" className="dropdown-item">Badminton Courts</a>
                  <a href="#" className="dropdown-item">Civil Constructions</a>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">OUR PROJECTS</a>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown(1, e)}>
                PRODUCTS <span className="dropdown-arrow">▼</span>
              </a>
              {activeDropdown === 1 && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Roofing Sheets</a>
                  <a href="#" className="dropdown-item">Gutters</a>
                  <a href="#" className="dropdown-item">Down Pipes</a>
                  <a href="#" className="dropdown-item">Purlins</a>
                  <a href="#" className="dropdown-item">Nuts and Bolts</a>
                </div>
              )}
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
