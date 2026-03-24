import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import img1 from './assets/products/roofingsheets.avif';
import img2 from './assets/products/gutters.jpeg';
import img3 from './assets/products/downPipes.jpeg';
import img4 from './assets/products/Purlins.jpeg';
import img5 from './assets/products/NutsandBolts.jpeg';

const ProductGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: 1,
      title: "Roofing Sheets",
      tag: "Durable Heritage",
      description: "Premium quality roofing sheets engineered for extreme weather resistance and aesthetic longevity.",
      image: img1
    },
    {
      id: 2,
      title: "Gutter Systems",
      tag: "Water Management",
      description: "Sleek, durable gutter systems designed for high-capacity drainage and seamless integration.",
      image: img2
    },
    {
      id: 3,
      title: "Down Pipes",
      tag: "Precision Flow",
      description: "Industrial-grade down pipes ensuring efficient rainwater management for large-scale structures.",
      image: img3
    },
    {
      id: 4,
      title: "Structural Purlins",
      tag: "Core Stability",
      description: "High-tensile steel purlins providing superior structural support for modern roof systems.",
      image: img4
    },
    {
      id: 5,
      title: "Fastening Solutions",
      tag: "Secure Build",
      description: "A comprehensive range of high-strength nuts and bolts for critical construction joints.",
      image: img5
    }
  ];

  return (
    <section className="products-grid-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">OUR SOLUTIONS</span>
          <h2 className="section-title">Premium Building Materials</h2>
          <div className="title-accent"></div>
          <p className="section-desc">We manufacture and supply the highest grade steel components for residential and industrial excellence.</p>
        </div>

        <div className="products-masonry">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`product-card-v2 ${hoveredId === product.id ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-image-content">
                <img src={product.image} alt={product.title} className="bg-img" loading="lazy" />
                <div className="card-overlay-v2"></div>
                <div className="card-info">
                  <span className="card-tag">{product.tag}</span>
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-text">{product.description}</p>
                  <button className="card-link">
                    EXPLORE SPECS <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-grid-section {
          padding: 100px 0;
          background-color: #fff;
        }

        .products-masonry {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .product-card-v2 {
          position: relative;
          height: 450px;
          border-radius: 20px;
          overflow: hidden;
          background-color: #eee;
          cursor: pointer;
        }

        .card-image-content {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .product-card-v2.is-hovered .bg-img {
          transform: scale(1.1);
        }

        .card-overlay-v2 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 100%);
          transition: opacity 0.4s ease;
        }

        .card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px;
          z-index: 2;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .product-card-v2.is-hovered .card-info {
          transform: translateY(0);
        }

        .card-tag {
          font-size: 11px;
          font-weight: 700;
          color: white;
          background: var(--tech-orange);
          padding: 4px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .card-text {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .product-card-v2.is-hovered .card-text {
          opacity: 1;
          max-height: 100px;
          margin-bottom: 25px;
        }

        .card-link {
          background: none;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .card-link:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .products-masonry { grid-template-columns: 1fr; }
          .product-card-v2 { height: 400px; }
          .card-info { padding: 30px; }
          .card-text { opacity: 1; max-height: 100px; margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;