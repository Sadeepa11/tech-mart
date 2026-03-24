import { useState, useEffect } from 'react';
import logo from './assets/Logo/logo.jpeg';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index, e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Top info bar */}
      <div className="info-bar">
        <div className="container info-container">
          <div className="company-slogan">Engineering Excellence In Steel</div>
          <div className="hotline">
            <Phone size={14} className="hotline-icon" />
            <span className="hotline-label">Hotline:</span>
            <a href="tel:94762372782" className="hotline-number">+94 76 237 2782</a>
            <span className="divider">|</span>
            <a href="tel:61450012766" className="hotline-number">+61 45 001 2766</a>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="navbar-container">
        <div className="container main-nav">
          {/* Logo */}
          <div className="logo-area">
            <a href="/" className="logo-link">
              <img src={logo} alt="Tech Mart Logo" className="logo" />
            </a>
          </div>
          
          {/* Mobile toggle */}
          <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Navigation */}
          <nav className={`navigation ${mobileMenuOpen ? 'active' : ''}`}>
            {/* Mobile close button inside the drawer */}
            <button className="mobile-drawer-close" onClick={toggleMobileMenu} aria-label="Close menu">
              <X size={24} />
            </button>
            <ul className="nav-menu">
              <li className="nav-item active">
                <a href="#" className="nav-link">HOME</a>
              </li>
              <li className="nav-item has-dropdown" 
                  onMouseEnter={() => window.innerWidth >= 992 && setActiveDropdown(0)}
                  onMouseLeave={() => window.innerWidth >= 992 && setActiveDropdown(null)}>
                <a href="#" className="nav-link" onClick={(e) => toggleDropdown(0, e)}>
                  OUR SCOPE
                  <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === 0 ? 'rotate' : ''}`} />
                </a>
                <ul className={`dropdown ${activeDropdown === 0 ? 'show' : ''}`}>
                  {[
                    "Warehouses", "Factories", "Stories", "Steel Bridges", 
                    "Mezzanine Floors", "Roof Structures", "Car Park Shades", 
                    "Badminton Courts", "Civil Constructions"
                  ].map(item => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">OUR PROJECTS</a>
              </li>
              <li className="nav-item has-dropdown"
                  onMouseEnter={() => window.innerWidth >= 992 && setActiveDropdown(1)}
                  onMouseLeave={() => window.innerWidth >= 992 && setActiveDropdown(null)}>
                <a href="#" className="nav-link" onClick={(e) => toggleDropdown(1, e)}>
                  PRODUCTS
                  <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === 1 ? 'rotate' : ''}`} />
                </a>
                <ul className={`dropdown ${activeDropdown === 1 ? 'show' : ''}`}>
                  {[
                    "Roofing Sheets", "Gutters", "Down Pipes", "Purlins", "Nuts and Bolts"
                  ].map(item => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
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

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Info Bar */
        .info-bar {
          background-color: #f8f9fa;
          padding: 6px 0;
          font-size: 13px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: var(--transition);
        }

        .navbar-wrapper.scrolled .info-bar {
          margin-top: -40px;
          opacity: 0;
        }

        .info-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .company-slogan {
          color: #666;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .hotline {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #444;
        }

        .hotline-icon {
          color: var(--tech-orange);
        }

        .hotline-label {
          font-weight: 600;
          color: #333;
        }

        .hotline-number {
          color: #666;
          font-weight: 500;
          text-decoration: none;
        }

        .hotline-number:hover {
          color: var(--tech-orange);
        }

        .divider {
          color: #ddd;
          margin: 0 4px;
        }

        /* Main Navbar */
        .navbar-container {
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: var(--transition);
        }

        .navbar-wrapper.scrolled .navbar-container {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          transition: var(--transition);
        }

        .navbar-wrapper.scrolled .main-nav {
          height: 70px;
        }

        .logo {
          height: 50px;
          width: auto;
          transition: var(--transition);
        }

        .navbar-wrapper.scrolled .logo {
          height: 40px;
        }

        /* Navigation */
        .nav-menu {
          display: flex;
          gap: 5px;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: #333;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover {
          background-color: rgba(255, 107, 0, 0.05);
          color: var(--tech-orange);
        }

        .nav-item.active .nav-link {
          color: var(--tech-orange);
          background-color: rgba(255, 107, 0, 0.08);
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
          opacity: 0.6;
        }

        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }

        /* Dropdown */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 240px;
          padding: 10px 0;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 1100;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown li a {
          display: block;
          padding: 10px 20px;
          font-size: 14px;
          color: #555;
          font-weight: 500;
        }

        .dropdown li a:hover {
          background-color: #f8f9fa;
          color: var(--tech-orange);
          padding-left: 25px;
        }

        /* Mobile Adjustments */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-drawer-close {
          display: none;
        }

        @media (max-width: 992px) {
          .info-bar {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .navigation {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background-color: white;
            padding: 80px 20px 40px;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
            z-index: 1050;
          }

          .navigation.active {
            right: 0;
          }

          .mobile-drawer-close {
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: var(--tech-orange);
            cursor: pointer;
            padding: 8px;
            z-index: 1060;
          }

          .nav-menu {
            flex-direction: column;
            gap: 10px;
          }

          .nav-link {
            padding: 12px 15px;
            width: 100%;
            justify-content: space-between;
          }

          .dropdown {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            max-height: 0;
            overflow: hidden;
            background-color: #f9f9f9;
            padding: 0;
            margin: 0;
            transition: max-height 0.4s ease-out;
          }

          .dropdown.show {
            max-height: 500px;
            padding: 5px 0;
            margin-top: 5px;
            border-radius: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
