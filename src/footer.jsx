import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Contact Details */}
        <div style={styles.contactInfo}>
          <h3 style={styles.footerHeading}>Contact Us</h3>
          <p style={styles.contactItem}>
            📍 123, Main Street, Colombo, Sri Lanka
          </p>
          <p style={styles.contactItem}>📞 +61 450 012 766</p>
          <a style={styles.contactItem} href="mailto:techmartengineering@yahoo.com">
            ✉️ techmartengineering@yahoo.com
          </a>
        </div>



        {/* Social Media */}
        <div style={styles.socialMedia}>
          <h3 style={styles.footerHeading}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>🌐</a>
            <a href="#" style={styles.icon}>📘</a>
            <a href="#" style={styles.icon}>📷</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.footerBottom}>
        <p>© 2025 Techmart Engineering All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// CSS-in-JS Styles
const styles = {
  footer: {
    background: "#1a202c",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerHeading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    borderBottom: "2px solid #4f46e5",
    display: "inline-block",
    paddingBottom: "5px",
  },
  contactInfo: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#0c4da2', // Your brand blue color
    textDecoration: 'none',
    margin: '5px 0',
    fontSize: '16px',
    transition: 'color 0.3s ease'
  },
  quickLinks: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  linksList: {
    listStyle: "none",
    padding: "0",
  },
  linkItem: {
    margin: "5px 0",
  },
  socialMedia: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  footerBottom: {
    marginTop: "20px",
    borderTop: "1px solid #4f46e5",
    paddingTop: "10px",
    fontSize: "0.875rem",
  },
};

// Responsive Styles
const responsiveStyles = `
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

// Inject Responsive Styles
const styleTag = document.createElement("style");
styleTag.innerHTML = responsiveStyles;
document.head.appendChild(styleTag);

export default Footer;
