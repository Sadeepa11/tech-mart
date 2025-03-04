import React from "react";
import { MapPin, Clock, DollarSign, Truck } from "lucide-react";



const Details = () => {
  const features = [
    {
      id: 1,
      icon: <MapPin size={32} />,
      title: "In-house design and manufacturing",
      description: "Custom solutions crafted in our own facilities to ensure quality"
    },
    {
      id: 2,
      icon: <DollarSign size={32} />,
      title: "Very economical products and solutions",
      description: "Competitive pricing without compromising on quality"
    },
    {
      id: 3,
      icon: <Clock size={32} />,
      title: "Timely delivery",
      description: "We understand the importance of deadlines in construction"
    },
    {
      id: 4,
      icon: <Truck size={32} />,
      title: "Transport services island-wide",
      description: "Convenient delivery to any location across the island"
    },
  ];

  return (
    <section className="why-techmart-section">
      <div className="why-techmart-container">
        <div className="why-techmart-header">
          <h2 className="why-techmart-title">
            WHY CHOOSE <span className="techmart-highlight">TECHMART</span>
          </h2>
          <div className="title-underline"></div>
          
        </div>

        <div className="why-techmart-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card"
            >
              <div className="icon-container">
                <div className="icon-circle">
                  {feature.icon}
                </div>
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <button className="cta-button">
            Contact Us Today
          </button>
        </div>
      </div>

      <style jsx>{`
        .why-techmart-section {
          background-color: #f8f9fa;
          padding: 4rem 1rem;
          width: 100%;
        }

        .why-techmart-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .why-techmart-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .why-techmart-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .techmart-highlight {
          color: #3182ce;
          position: relative;
        }

        .title-underline {
          width: 6rem;
          height: 4px;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          margin: 0 auto;
          border-radius: 2px;
        }

        .why-techmart-subtitle {
          margin-top: 1rem;
          color: #4a5568;
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.1rem;
        }

        .why-techmart-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .why-techmart-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .why-techmart-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .feature-card {
          background-color: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border-top: 4px solid #3182ce;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(49, 130, 206, 0.1) 0%, rgba(255, 255, 255, 0) 50%);
          z-index: 0;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .icon-circle {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(49, 130, 206, 0.1);
          color: #3182ce;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-circle {
          background-color: #3182ce;
          color: white;
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .feature-description {
          color: #4a5568;
          text-align: center;
          font-size: 0.875rem;
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }

        .cta-container {
          margin-top: 3rem;
          text-align: center;
        }

        .cta-button {
          background-color: #3182ce;
          color: white;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(49, 130, 206, 0.25);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
          transition: all 0.5s ease;
        }

        .cta-button:hover {
          background-color: #2c5282;
          box-shadow: 0 6px 12px rgba(44, 82, 130, 0.35);
        }

        .cta-button:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
};

export default Details;