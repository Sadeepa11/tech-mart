import React, { useState, useEffect } from 'react';

import img1 from './assets/products/roofingsheets.avif';
import img2 from './assets/products/gutters.jpeg';
import img3 from './assets/products/downPipes.jpeg';
import img4 from './assets/products/Purlins.jpeg';
import img5 from './assets/products/NutsandBolts.jpeg';

const ProductGrid = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const products = [
    {
      id: 1,
      title: "Roofing Sheets",
      description: "Premium quality roofing sheets for residential and commercial buildings",
      image: img1
    },
    {
      id: 2,
      title: "Gutters",
      description: "Durable gutter systems for effective water drainage",
      image: img2
    },
    {
      id: 3,
      title: "Down Pipes",
      description: "High-quality down pipes for rainwater management",
      image: img3
    },
    {
      id: 4,
      title: "Purlins",
      description: "Structural roof purlins for enhanced building stability",
      image: img4
    },
    {
      id: 5,
      title: "Nuts and Bolts",
      description: "Essential fastening solutions for construction projects",
      image: img5
    }
  ];

  // Responsive grid calculations
  const getItemWidth = (index) => {
    if (windowWidth <= 640) {
      return '100%'; // Mobile: 1 column
    } else if (windowWidth <= 1024) {
      return '50%'; // Tablet: 2 columns
    } else {
      // Desktop: 2 items in first row, 3 items in second row
      return index < 2 ? '50%' : '33.333%';
    }
  };

  const getItemHeight = () => {
    if (windowWidth <= 640) {
      return '280px'; // Mobile height
    } else if (windowWidth <= 1024) {
      return '320px'; // Tablet height
    } else {
      return '380px'; // Desktop height
    }
  };

  return (
    <div className="product-section">
      {/* Header - Matching the Projects Header Style */}
      <div className="products-header">
        <h2>Our Products</h2>
        <div className="title-underline"></div>
        <p>Premium quality building materials for your construction projects</p>
      </div>

      {/* Product Grid */}
      <div className="product-container">
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-item"
              style={{
                width: getItemWidth(index),
                height: getItemHeight(),
              }}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="product-card">
                {/* Product Image */}
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="product-image"
                    style={{
                      transform: hoveredItem === product.id ? 'scale(1.08)' : 'scale(1.01)'
                    }}
                  />
                </div>
                
                {/* Dark Overlay */}
                <div 
                  className="product-overlay"
                  style={{
                    background: hoveredItem === product.id 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)'
                  }}
                ></div>
                
                {/* Content */}
                <div 
                  className="product-content"
                  style={{
                    transform: hoveredItem === product.id ? 'translateY(-8px)' : 'translateY(0)'
                  }}
                >
                  <h2 className="product-title">
                    {product.title}
                  </h2>
                  <p 
                    className="product-description"
                    style={{
                      opacity: hoveredItem === product.id ? 1 : 0
                    }}
                  >
                    {product.description}
                  </p>
                  <div 
                    className="product-button"
                    style={{
                      opacity: hoveredItem === product.id ? 1 : 0
                    }}
                  >
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .product-section {
          width: 100%;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
          margin: 0;
          background-color: #f9fafb;
          padding: 3rem 0;
        }

        .products-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .products-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, rgb(22, 6, 84), rgb(36, 72, 251));
          margin: 0.75rem auto 1.5rem;
          border-radius: 2px;
        }

        .products-header p {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .product-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          margin-bottom: 3rem;
        }

        .product-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -0.5rem;
        }

        .product-item {
          padding: 0 0.5rem;
          margin-bottom: 1rem;
          box-sizing: border-box;
        }

        .product-card {
          height: 100%;
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .product-card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .product-image-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .product-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .product-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .product-description {
          color: #bfdbfe;
          font-size: 0.875rem;
          transition: opacity 0.3s ease;
          margin-bottom: 0.75rem;
        }

        .product-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }

        .product-button:hover {
          background-color: #1d4ed8;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .products-header h2 {
            font-size: 2.25rem;
          }

          .product-title {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 640px) {
          .products-header h2 {
            font-size: 2rem;
          }

          .products-header p {
            font-size: 1rem;
          }

          .product-content {
            padding: 1rem;
          }

          .product-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;