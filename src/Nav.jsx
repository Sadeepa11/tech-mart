// RoofmartNavbar.jsx
import  { useState } from 'react';
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
            <img 
              src={logo} 
              alt="Roofmart Logo"
              className="logo-image"
            />
          </div>
          {/* <div className="logo-text">
            <div className="logo-title">ROOFMART</div>
            <div className="logo-subtitle">THE SOLUTIONS TO YOUR BUILDING MATERIALS</div>
          </div> */}
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
            <li className="nav-item ">
              <a href="#" className="nav-link">OUR SCOPE</a>
            </li>
     
            {/* <li className="nav-item">
              <a href="#" className="nav-link">STEEL BUILDING SYSTEMS</a>
            </li> */}
            {/* <li className="nav-item">
              <a href="#" className="nav-link">OUR PROJECTS</a>
            </li> */}
            <li className="nav-item">
              <a href="#" className="nav-link">OUR PROJECTS</a>
            </li>

            <li className="nav-item dropdown">
              <a href="#" className="nav-link" onClick={(e) => toggleDropdown(0, e)}>
                PRODUCTS <span className="dropdown-arrow">▼</span>
              </a>
              {activeDropdown === 0 && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">Roofing Sheets</a>
                  <a href="#" className="dropdown-item">Gutters</a>
                  <a href="#" className="dropdown-item">Down Pipes</a>
                  <a href="#" className="dropdown-item">Purlins</a>
                  <a href="#" className="dropdown-item">Nuts and Bolts</a>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" >
                ABOUT US 
              </a>
              
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