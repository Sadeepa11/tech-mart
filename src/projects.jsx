import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

import img1 from './assets/sliderImages/slider1.jpg';

// import img1 from './assets/sliderImages/slider1.jpg';
import img2 from './assets/sliderImages/slider2.jpg';
import img3 from './assets/sliderImages/slider3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SHOW ROOM For Lakpahana Colombo",
      description: "A 15-story commercial building with sustainable design features and LEED certification",
      // technology: "Commercial, LEED Certified, Steel Structure",
      image: img2
    },
    {
      id: 2,
      title: "Dayata Kirula",
      description: "Premium residential complex with 50 units featuring smart home technology",
      // technology: "Residential, Smart Home, Concrete",
      image: img3
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Our Projects</h2>
          <div className="title-underline"></div>
          <p>Explore our landmark construction and development initiatives</p>
        </div>

        <div className="slider-container">
          <div className={`slide ${isAnimating ? 'animating' : ''}`}>
            <div className="slide-content">
              <div className="image-wrapper">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
                {/* <div className="image-overlay">
                  <button className="view-btn">
                    <ExternalLink size={20} /> Project Gallery
                  </button>
                </div> */}
              </div>
              <div className="text-content">
                <h3>{projects[currentIndex].title}</h3>
                <p className="project-description">{projects[currentIndex].description}</p>
                {/* <div className="tech-tags">
                  {projects[currentIndex].technology.split(', ').map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div> */}
                {/* <button className="details-btn">View Project Details</button> */}
              </div>
            </div>
          </div>
          
          <button className="arrow-btn left" onClick={goToPrevious} aria-label="Previous project">
            <ChevronLeft size={24} />
          </button>
          
          <button className="arrow-btn right" onClick={goToNext} aria-label="Next project">
            <ChevronRight size={24} />
          </button>

          <div className="dots-container">
            {projects.map((_, slideIndex) => (
              <button 
                key={slideIndex} 
                onClick={() => goToSlide(slideIndex)}
                className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
                aria-label={`Go to project ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>

        <div style={{ backgroundImage: `url(${img1})` }} className="img"></div>


        <div className="all-projects-btn-container">
          <button className="all-projects-btn">View All Projects</button>
        </div>
      </div>

      <style jsx>{`


.img {
  width: 80vw;
  height: 100vh;

  background-size: contain; /* Adjusts the image to cover the entire element */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents image repetition */
}

        .projects-section {
          background-color: #f9fafb;
          padding: 4rem 1rem;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .projects-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg,rgb(22, 6, 84),rgb(36, 72, 251));
          margin: 0.75rem auto 1.5rem;
          border-radius: 2px;
        }

        .projects-header p {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto;
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .slide {
          transition: transform 0.5s ease-in-out, opacity 0.3s ease;
        }

        .slide.animating {
          opacity: 0.7;
        }

        .slide-content {
          display: flex;
          flex-direction: column;
          
          @media (min-width: 768px) {
            flex-direction: row;
          }
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          
          @media (min-width: 768px) {
            width: 50%;
          }
        }

        .image-wrapper img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          
          @media (min-width: 768px) {
            height: 400px;
          }
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1a202c;
          border: none;
          padding: 10px 16px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: #0b70f5;
          color: white;
        }

        .text-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          
          @media (min-width: 768px) {
            width: 50%;
          }
        }

        .text-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .project-description {
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: #fef3c7;
          color: #92400e;
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .details-btn {
          background: #0b70f5;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: auto;
          align-self: flex-start;
        }

        .details-btn:hover {
          background: #0b70f5;
        }

        .arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
          color: #1a202c;
          transition: all 0.3s ease;
        }

        .arrow-btn:hover {
          background: #0b70f5;
          color: white;
        }

        .arrow-btn.left {
          left: 1rem;
        }

        .arrow-btn.right {
          right: 1rem;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e2e8f0;
          margin: 0 6px;
          padding: 0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #0b70f5;
          transform: scale(1.2);
        }

        .all-projects-btn-container {
          text-align: center;
          margin-top: 2.5rem;
        }

        .all-projects-btn {
          background: transparent;
          color:#0b70f5;
          border: 2px solid #0b70f5;
          padding: 0.75rem 2rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .all-projects-btn:hover {
          background: #0b70f5;
          color: white;
        }

        @media (max-width: 768px) {
          .projects-header h2 {
            font-size: 2rem;
          }
          
          .arrow-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;