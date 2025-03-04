import React from "react";


import img1 from './assets/Logo/clients/dw.png';
import img2 from './assets/Logo/clients/mm.png';
import img3 from './assets/Logo/clients/rda.jpeg';

const OurClients = () => {
  return (
    <section style={styles.clientsSection}>
      {/* Header */}
      <div style={styles.clientsHeader}>
        <h2 style={styles.headerText}>Our Clients</h2>
        <div style={styles.titleUnderline}></div>
        <p style={styles.headerParagraph}>Trusted by leading companies across industries</p>
      </div>

      {/* Clients Container */}
      <div style={styles.clientsContainer}>
        <div style={styles.clientCard}>
          <img src= {img1} alt="Client 1" style={styles.clientImage} />
 
        </div>
        <div style={styles.clientCard}>
          <img src={img2} alt="Client 2" style={styles.clientImage} />
     
        </div>
        <div style={styles.clientCard}>
          <img src={img3} alt="Client 3" style={styles.clientImage} />

        </div>
      </div>
    </section>
  );
};

// CSS-in-JS Styles
const styles = {
  clientsSection: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 20px",
    textAlign: "center",
  },
  clientsHeader: {
    marginBottom: "3rem",
  },
  headerText: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1a202c",
    marginBottom: "0.5rem",
  },
  titleUnderline: {
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, rgb(22, 6, 84), rgb(36, 72, 251))",
    margin: "0.75rem auto 1.5rem",
    borderRadius: "2px",
  },
  headerParagraph: {
    fontSize: "1.125rem",
    color: "#4b5563",
    maxWidth: "600px",
    margin: "0 auto",
  },
  clientsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  clientCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "280px",
    transition: "transform 0.3s ease-in-out",
  },
  clientCardHover: {
    transform: "scale(1.05)",
  },
  clientImage: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  clientName: {
    fontSize: "1.25rem",
    color: "#1a202c",
  },
};

// Responsive Styling using Media Queries
const responsiveStyles = `
  @media (max-width: 1024px) {
    .clients-container {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  @media (max-width: 768px) {
    .clients-container {
      flex-direction: column;
      align-items: center;
    }
    .client-card {
      width: 80%;
    }
  }
  @media (max-width: 480px) {
    .clients-header h2 {
      font-size: 2rem;
    }
    .clients-header p {
      font-size: 1rem;
    }
    .client-card {
      width: 100%;
    }
  }
`;

// Inject Responsive Styles
const styleTag = document.createElement("style");
styleTag.innerHTML = responsiveStyles;
document.head.appendChild(styleTag);

export default OurClients;
