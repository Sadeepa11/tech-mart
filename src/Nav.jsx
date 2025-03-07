import { useState } from 'react';
import logo from './assets/Logo/logo.jpeg';
import { Phone, Menu, X } from 'lucide-react';

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
    <div className="navbar-wrapper">
      {/* Top info bar with hotline */}
      <div className="info-bar">
        <div className="container info-container">
          <div className="company-slogan">Quality Roofing Solutions</div>
          <div className="hotline">
            <Phone size={16} className="hotline-icon" />
            <span>Hotline:</span>
            <a href="tel:0774515539" className="hotline-number">0774515539</a>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="navbar-container">
        <div className="gray-accent-line"></div>
        <div className="container main-nav">
          {/* Logo */}
          <div className="logo-area">
            <div className="logo-wrapper">
              <img src={logo} alt="Roofmart Logo" className="logo" />
            </div>
          </div>
          
          {/* Mobile toggle */}
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X style={{color:"white"}} size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation */}
          <nav className={`navigation ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item active">
                <a href="#" className="nav-link">HOME</a>
              </li>
              <li className="nav-item has-dropdown">
                <a href="#" className="nav-link" onClick={(e) => toggleDropdown(0, e)}>
                  OUR SCOPE
                  <span className="dropdown-indicator">▼</span>
                </a>
                {activeDropdown === 0 && (
                  <ul className="dropdown">
                    <li><a href="#">Warehouses</a></li>
                    <li><a href="#">Factories</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Steel Bridges</a></li>
                    <li><a href="#">Mezzanine Floors</a></li>
                    <li><a href="#">Roof Structures</a></li>
                    <li><a href="#">Car Park Shades</a></li>
                    <li><a href="#">Badminton Courts</a></li>
                    <li><a href="#">Civil Constructions</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">OUR PROJECTS</a>
              </li>
              <li className="nav-item has-dropdown">
                <a href="#" className="nav-link" onClick={(e) => toggleDropdown(1, e)}>
                  PRODUCTS
                  <span className="dropdown-indicator">▼</span>
                </a>
                {activeDropdown === 1 && (
                  <ul className="dropdown">
                    <li><a href="#">Roofing Sheets</a></li>
                    <li><a href="#">Gutters</a></li>
                    <li><a href="#">Down Pipes</a></li>
                    <li><a href="#">Purlins</a></li>
                    <li><a href="#">Nuts and Bolts</a></li>
                  </ul>
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

      <style jsx>{`
        /* Global variables */
        :root {
          --primary-gray: #666666;
          --primary-black: #000000;
          --dark-gray: #333333;
          --light-gray: #f1f1f1;
          --white: #ffffff;
          --text-dark: #222222;
        }

        /* Global container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          width: 100%;
        }

        /* Info Bar with Hotline */
        .info-bar {
          background-color: var(--light-gray);
          padding: 8px 0;
          font-size: 14px;
          border-bottom: 1px solid #e5e5e5;
        }

        .info-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .company-slogan {
          color: var(--text-dark);
          font-weight: 500;
        }

        .hotline {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-dark);
        }

        .hotline-icon {
          color: var(--primary-gray);
        }

        .hotline-number {
          color: var(--primary-gray);
          font-weight: bold;
          text-decoration: none;
          transition: color 0.2s;
        }

        .hotline-number:hover {
          color: var(--primary-black);
          text-decoration: underline;
        }

        /* Main Navigation */
        .navbar-wrapper {
          position: relative;
          z-index: 1000;
        }

        .navbar-container {
          background-color: var(--white);
          position: relative;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .gray-accent-line {
          height: 4px;
          width: 100%;
          background-color: var(--primary-gray);
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
        }

        /* Logo Area */
        .logo-area {
          background-color: var(--primary-gray);
          padding: 0 30px;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
        }

        // .logo-area::after {
        //   content: '';
        //   position: absolute;
        //   right: -20px;
        //   top: 0;
        //   width: 0;
        //   height: 0;
        //   border-style: solid;
        //   border-width: 0 0 100px 20px;
        //   border-color: transparent transparent var(--primary-gray) transparent;
        // }

        .logo-wrapper {
          background-color: var(--primary-gray);
          border-radius: 4px;
          padding: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
          height: 80px;
          display: block;
        }

        /* Navigation */
        .navigation {
          background-color: var(--primary-black);
          flex: 1;
          margin-left: 20px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: flex-end;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: var(--white);
          text-decoration: none;
          padding: 25px 15px;
          display: block;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.3s;
          position: relative;
        }

        .nav-item.active .nav-link::after,
        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 15px;
          right: 15px;
          height: 3px;
          background-color: var(--primary-gray);
        }

        .dropdown-indicator {
          margin-left: 5px;
          font-size: 10px;
          opacity: 0.7;
        }

        /* Dropdown styles */
        .has-dropdown {
          position: relative;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--dark-gray);
          min-width: 220px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 100;
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 2px solid var(--primary-gray);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown li:last-child {
          border-bottom: none;
        }

        .dropdown a {
          color: var(--white);
          text-decoration: none;
          padding: 12px 20px;
          display: block;
          font-size: 14px;
          transition: all 0.2s;
        }

        .dropdown a:hover {
          background-color: var(--primary-black);
          padding-left: 25px;
        }

        /* Mobile toggle */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary-black);
          cursor: pointer;
          padding: 10px;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .main-nav {
            padding: 10px 0;
          }
          
          .logo-area {
            background-color: transparent;
            padding: 0;
          }
          
          .logo-area::after {
            display: none;
          }
          
          .logo-wrapper {
            background-color: transparent;
            box-shadow: none;
          }
          
          .logo {
            height: 60px;
          }
          
          .mobile-toggle {
            display: block;
            z-index: 200;
          }
          
          .navigation {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background-color: var(--primary-black);
            margin-left: 0;
            transition: right 0.3s ease;
            z-index: 100;
            overflow-y: auto;
            padding-top: 70px;
          }
          
          .navigation.active {
            right: 0;
          }
          
          .nav-menu {
            flex-direction: column;
            justify-content: flex-start;
          }
          
          .nav-link {
            padding: 15px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-item.active .nav-link::after,
          .nav-link:hover::after {
            display: none;
          }
          
          .dropdown {
            position: static;
            width: 100%;
            box-shadow: none;
            border-top: none;
            animation: none;
            background-color: rgba(51, 51, 51, 0.5);
          }
          
          .has-dropdown .nav-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .info-container {
            flex-direction: column;
            gap: 5px;
          }
        }

        @media (max-width: 576px) {
          .info-bar {
            text-align: center;
          }
          
          .logo {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;