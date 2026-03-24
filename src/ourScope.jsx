import { useState } from 'react';
import { 
  Package, Factory, BarChart2, Waypoints, Layers, 
  Home, Umbrella, Activity, HardHat, ChevronRight 
} from 'lucide-react';

const OurScope = () => {
  const [activeTab, setActiveTab] = useState(null);

  const services = [
    {
      id: 1,
      title: "Warehouses",
      icon: <Package size={32} />,
      description: "Custom designed storage facilities with optimal space utilization and effective load-bearing capacity."
    },
    {
      id: 2,
      title: "Factories",
      icon: <Factory size={32} />,
      description: "Efficient manufacturing environments designed to maximize productivity and accommodate specialized equipment."
    },
    {
      id: 3,
      title: "Multi-Story",
      icon: <BarChart2 size={32} />,
      description: "Commercial and industrial buildings combining architectural appeal with structural integrity."
    },
    {
      id: 4,
      title: "Steel Bridges",
      icon: <Waypoints size={32} />,
      description: "Durable steel bridges designed to withstand heavy loads and harsh environmental conditions."
    },
    {
      id: 5,
      title: "Mezzanine Floors",
      icon: <Layers size={32} />,
      description: "Custom mezzanine solutions that maximize vertical space while providing optimal stability."
    },
    {
      id: 6,
      title: "Roof Structures",
      icon: <Home size={32} />,
      description: "Complex roof solutions offering protection, insulation, and high-end aesthetic appeal."
    },
    {
      id: 7,
      title: "Car Park Shades",
      icon: <Umbrella size={32} />,
      description: "Elegant and durable shading solutions that protect vehicles while offering customized coverage."
    },
    {
      id: 8,
      title: "Sports Courts",
      icon: <Activity size={32} />,
      description: "Professional-grade courts with precise dimensions and optimal playing surfaces."
    },
    {
      id: 9,
      title: "Civil Constructions",
      icon: <HardHat size={32} />,
      description: "Comprehensive infrastructure projects including drainage systems and site development."
    }
  ];

  return (
    <section className="scope-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CAPABILITIES</span>
          <h2 className="section-title">Our Scope of Services</h2>
          <div className="title-accent"></div>
          <p className="section-desc">We provides comprehensive structural engineering and construction services across industrial and commercial sectors.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card-v3 ${activeTab === service.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}
            >
              <div className="card-top">
                <div className="icon-box">{service.icon}</div>
                <h3 className="service-title-v3">{service.title}</h3>
              </div>
              <div className="card-body">
                <p className="service-desc-v3">{service.description}</p>
                <div className="card-action">
                  <span>LEARN MORE</span>
                  <ChevronRight size={16} className="arrow-icon" />
                </div>
              </div>
              
              {activeTab === service.id && (
                <div className="expanded-zone">
                  <div className="zone-inner">
                    <h4 className="zone-label">Key Specialties:</h4>
                    <ul className="zone-list">
                      <li>Bespoke Engineering</li>
                      <li>High-Grade Steel</li>
                      <li>Regulatory Compliance</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scope-section {
          background-color: #f8f9fa;
          padding: 100px 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .service-card-v3 {
          background: white;
          border-radius: 16px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .service-card-v3:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border-color: rgba(255, 107, 0, 0.1);
        }

        .service-card-v3.is-active {
          background-color: var(--tech-orange);
          color: white;
        }

        .card-top {
          margin-bottom: 24px;
        }

        .icon-box {
          color: var(--tech-orange);
          margin-bottom: 20px;
          transition: var(--transition);
        }

        .service-card-v3.is-active .icon-box {
          color: white;
        }

        .service-title-v3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
        }

        .service-desc-v3 {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
          transition: var(--transition);
        }

        .service-card-v3.is-active .service-desc-v3 {
          color: rgba(255,255,255,0.8);
        }

        .card-action {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--tech-orange);
          transition: var(--transition);
        }

        .service-card-v3.is-active .card-action {
          color: white;
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .service-card-v3:hover .arrow-icon {
          transform: translateX(5px);
        }

        .expanded-zone {
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
          animation: slideDown 0.4s ease forwards;
        }

        .zone-label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .zone-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 14px;
        }

        .zone-list li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .zone-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: inherit;
          opacity: 0.7;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card-v3 { padding: 30px; }
        }
      `}</style>
    </section>
  );
};

export default OurScope;