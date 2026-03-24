import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">TECH <span className="text-blue">MART</span></h2>
            <p className="brand-desc">
              Pioneering excellence in steel and civil construction since 2010. 
              Delivering precision engineering and sustainable structural solutions.
            </p>
            <div className="social-links-v2">
              <a href="#" className="social-btn"><Facebook size={18} /></a>
              <a href="#" className="social-btn"><Instagram size={18} /></a>
              <a href="#" className="social-btn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-list">
              <div className="contact-item-v2">
                <MapPin size={20} className="contact-icon" />
                <span>190/2, St. Anthony's Road, Kadawatha</span>
              </div>
              <div className="contact-item-v2">
                <Phone size={20} className="contact-icon" />
                <div className="phone-stack">
                  <span>+94 76 237 2782</span>
                  <span>+61 45 001 2766</span>
                </div>
              </div>
              <div className="contact-item-v2">
                <Mail size={20} className="contact-icon" />
                <a href="mailto:techmartengineering@yahoo.com">techmartengineering@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-v2">
          <p className="copyright">© {new Date().getFullYear()} Techmart Engineering. All Rights Reserved.</p>
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-v2 {
          background-color: #0c0c0c;
          padding: 80px 0 30px;
          color: #888;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .text-blue { color: var(--tech-orange); }

        .brand-desc {
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 320px;
        }

        .social-links-v2 {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition);
        }

        .social-btn:hover {
          background: var(--tech-orange);
          transform: translateY(-3px);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-list li {
          margin-bottom: 12px;
        }

        .footer-nav-list a {
          color: #888;
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-nav-list a:hover {
          color: white;
          padding-left: 5px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item-v2 {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .contact-icon {
          color: var(--tech-orange);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .phone-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-item-v2 a {
          color: inherit;
          text-decoration: none;
          transition: var(--transition);
        }

        .contact-item-v2 a:hover { color: white; }

        .footer-bottom-v2 {
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright { font-size: 14px; }

        .scroll-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--tech-orange);
          border: none;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .scroll-top-btn:hover {
          background: white;
          color: var(--tech-orange);
          transform: translateY(-5px);
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-brand { text-align: center; }
          .social-links-v2 { justify-content: center; }
          .brand-desc { max-width: 100%; }
          .footer-bottom-v2 { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
