
import React from "react";

const WhoWeAre = () => {
  const styles = {
    section: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "0.5rem",
    },
    underline: {
      width: "60px",
      height: "4px",
      background: "linear-gradient(90deg, rgb(22, 6, 84), rgb(36, 72, 251))",
      margin: "0.75rem auto 1.5rem",
      borderRadius: "2px",
    },
    subtitle: {
      fontSize: "1.125rem",
      color: "#4b5563",
      maxWidth: "600px",
      margin: "0 auto",
    },
    content: {
      textAlign: "left",
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      fontSize: "1.125rem",
      color: "#333",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    responsive: {
      "@media (maxWidth: '768px')": {
        section: {
          padding: "15px",
        },
        title: {
          fontSize: "2rem",
        },
        subtitle: {
          fontSize: "1rem",
        },
        content: {
          fontSize: "1rem",
        },
      },
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Who We Are</h2>
        <div style={styles.underline}></div>
        <p style={styles.subtitle}>
          Building a legacy of excellence in civil and steel construction since 2010
        </p>
      </div>

      <div style={styles.content}>
        <p>
          Incorporated in 2010, we soon established ourselves as a recognized provider of civil and steel 
          construction needs. Our prime focus is on providing steel solutions to the growing needs of the 
          industry. Our steadily growing customer base bears testimony to the level of excellence achieved 
          in our products and services offered to the market.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
