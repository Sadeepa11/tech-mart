import React, { useState } from 'react';
// import { Package, Building, BarChart2, Bridge, Layers, Home, Umbrella, Activity, Road } from 'lucide-react';

const OurScope = () => {
  const [activeTab, setActiveTab] = useState(null);

  const services = [
    {
      id: 1,
      title: "Warehouses",
    //   icon: <Package />,
      description: "Custom designed storage facilities with optimal space utilization and effective load-bearing capacity to meet your specific logistics needs."
    },
    {
      id: 2,
      title: "Factories",
    //   icon: <Building />,
      description: "Efficient manufacturing environments designed to maximize productivity, accommodate specialized equipment, and meet strict industrial safety standards."
    },
    {
      id: 3,
      title: "Stories",
    //   icon: <BarChart2 />,
      description: "Multi-story commercial and industrial buildings combining architectural appeal with structural integrity for visually impressive and functionally sound spaces."
    },
    {
      id: 4,
      title: "Steel Bridges",
    //   icon: <Bridge />,
      description: "Durable steel bridges designed to withstand heavy loads and harsh environmental conditions with advanced engineering techniques."
    },
    {
      id: 5,
      title: "Mezzanine Floors",
    //   icon: <Layers />,
      description: "Custom mezzanine solutions that maximize vertical space utilization while providing optimal stability and additional functional areas."
    },
    {
      id: 6,
      title: "Roof Structures",
    //   icon: <Home />,
      description: "Complex roof solutions offering protection, insulation, and aesthetic appeal designed to withstand environmental challenges."
    },
    {
      id: 7,
      title: "Car Park Shades",
    //   icon: <Umbrella />,
      description: "Elegant and durable shading solutions that protect vehicles from the elements while offering customized coverage options."
    },
    {
      id: 8,
      title: "Badminton Courts",
    //   icon: <Activity />,
      description: "Professional-grade courts with precise dimensions, optimal playing surfaces, proper lighting systems, and accurate line markings."
    },
    {
      id: 9,
      title: "Civil Constructions",
    //   icon: <Road />,
      description: "Comprehensive infrastructure projects including roads, drainage systems, retaining walls, and site development with full regulatory compliance."
    }
  ];

  const handleCardClick = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="scope-section">
      <style jsx>{`
        .scope-section {
          background-color: #f5f5f5;
          padding: 80px 20px;
          font-family: 'Arial', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #1a3c6e;
          margin-bottom: 16px;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background-color: #1a3c6e;
          margin: 0 auto 24px;
        }

        .section-description {
          max-width: 800px;
          margin: 0 auto;
          font-size: 18px;
          color: #555;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .service-card.active {
          border: 2px solid #1a3c6e;
        }

        .service-icon {
          height: 120px;
          background-color: #1a3c6e;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon svg {
          width: 50px;
          height: 50px;
        }

        .service-content {
          padding: 25px;
        }

        .service-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #1a3c6e;
        }

        .service-description {
          font-size: 15px;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .learn-more-button {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background-color: #1a3c6e;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .learn-more-button:hover {
          background-color: #15305a;
        }

        .button-icon {
          margin-left: 8px;
        }

        .expanded-content {
          background-color: #f0f5ff;
          padding: 20px;
          border-top: 1px solid #e0e0ff;
        }

        .expanded-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a3c6e;
          margin-bottom: 12px;
        }

        .expanded-list {
          padding-left: 20px;
          margin: 0;
        }

        .expanded-list li {
          margin-bottom: 6px;
          color: #444;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }

          .section-title {
            font-size: 28px;
          }

          .section-description {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .scope-section {
            padding: 40px 15px;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Scope of Services</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We provide comprehensive structural engineering and construction services across a wide range of industrial, commercial, and infrastructure projects.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${activeTab === service.id ? 'active' : ''}`}
              onClick={() => handleCardClick(service.id)}
            >
              {/* <div className="service-icon"> */}
                {/* {service.icon} */}
              {/* </div> */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="learn-more-button">
                  Learn More
                  <span className="button-icon">→</span>
                </button>
              </div>
              
              {activeTab === service.id && (
                <div className="expanded-content">
                  <h4 className="expanded-title">Key Features:</h4>
                  <ul className="expanded-list">
                    <li>Professional engineering and design</li>
                    <li>Quality materials and construction</li>
                    <li>Custom solutions for your specific needs</li>
                    <li>Adherence to industry standards</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurScope;