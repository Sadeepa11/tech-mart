import img1 from './assets/Logo/clients/dw.png';
import img2 from './assets/Logo/clients/mm.png';
import img3 from './assets/Logo/clients/rda.jpeg';

const OurClients = () => {
  const clients = [
    { id: 1, name: "Client 1", logo: img1 },
    { id: 2, name: "Client 2", logo: img2 },
    { id: 3, name: "Client 3", logo: img3 },
  ];

  return (
    <section className="clients-section-v2">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PARTNERSHIPS</span>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <div className="title-accent"></div>
          <p className="section-desc">We take pride in our collaborations with prestigious organizations that trust our engineering expertise.</p>
        </div>

        <div className="clients-grid-v2">
          {clients.map((client) => (
            <div key={client.id} className="client-logo-card">
              <div className="logo-wrapper">
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clients-section-v2 {
          padding: 80px 0;
          background-color: #fcfcfc;
        }

        .clients-grid-v2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .client-logo-card {
          background: white;
          border-radius: 16px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          transition: all 0.4s ease;
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .client-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
          border-color: rgba(8, 58, 125, 0.1);
        }

        .logo-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        .client-logo-card:hover .logo-wrapper {
          filter: grayscale(0%);
          opacity: 1;
        }

        .logo-wrapper img {
          max-width: 100%;
          max-height: 80px;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .clients-grid-v2 { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 480px) {
          .clients-grid-v2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default OurClients;
