import React from 'react';
import logo from './assets/Logo/logo.jpeg';
import { Award } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="who-container">
          <div className="who-text-content">
            <span className="section-tag-v2">SINCE 2010</span>
            <h2 className="section-title-v2">Precision Engineering, <br />Lasting Legacy</h2>
            <div className="title-accent-v2"></div>
            <p className="who-description">
              Incorporated in 2010, Tech Mart has established itself as a recognized leader in civil and steel 
              construction. Our prime focus is delivering innovative steel solutions to meet the growing 
              demands of modern industry. 
            </p>
            <p className="who-description">
              Our steadily growing customer base is a testament to the excellence we achieve in every product 
              and service. We don't just build structures; we forge long-term partnerships through reliability 
              and technical mastery.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">14+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
          <div className="who-visual-content">
            <div className="image-stack">
              <div className="image-main">
                <div className="logo-display">
                  <img src={logo} alt="Tech Mart Logo" className="who-logo" loading="lazy" />
                </div>
              </div>
              <div className="image-accent">
                <div className="accent-box">
                  <Award size={20} className="accent-icon" />
                  <span className="accent-text">ISO CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-we-are-section {
          padding: 120px 0;
          background-color: white;
          overflow: hidden;
        }

        .who-container {
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .who-text-content {
          flex: 1.2;
        }

        .section-tag-v2 {
          font-size: 13px;
          font-weight: 700;
          color: var(--tech-orange);
          letter-spacing: 2px;
          margin-bottom: 16px;
          display: block;
        }

        .section-title-v2 {
          font-size: 3rem;
          font-weight: 800;
          color: #111;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .title-accent-v2 {
          width: 60px;
          height: 4px;
          background: var(--tech-orange);
          margin-bottom: 30px;
          border-radius: 2px;
        }

        .who-description {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .stats-row {
          display: flex;
          gap: 50px;
          margin-top: 40px;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--tech-orange);
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          font-weight: 600;
          color: #999;
          text-transform: uppercase;
        }

        .who-visual-content {
          flex: 1;
          position: relative;
        }

        .image-stack {
          position: relative;
          padding-left: 20px;
        }

        .image-main {
          width: 100%;
          aspect-ratio: 1/1;
          background-color: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .logo-display {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .who-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
        }

        .image-accent {
          position: absolute;
          bottom: -50px;
          left: -80px;
          z-index: 2;
        }

        .accent-box {
          background-color: var(--tech-orange);
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(255, 107, 0, 0.4);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .accent-icon {
          opacity: 0.9;
        }

        .accent-text {
          font-weight: 700;
          letter-spacing: 2.5px;
          font-size: 11px;
          white-space: nowrap;
        }

        @media (max-width: 992px) {
          .who-container { flex-direction: column; gap: 60px; }
          .who-text-content { text-align: center; }
          .title-accent-v2 { margin: 0 auto 30px; }
          .stats-row { justify-content: center; }
          .who-visual-content { width: 100%; max-width: 450px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;
