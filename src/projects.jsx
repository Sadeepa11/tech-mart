import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

import img1 from './assets/sliderImages/slider1.jpg';
import img2 from './assets/sliderImages/slider2.jpg';
import img3 from './assets/sliderImages/slider3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SHOW ROOM For Lakpahana Colombo",
      description: "A 15-story commercial building with sustainable design features and LEED certification",
      image: img2
    },
    {
      id: 2,
      title: "Dayata Kirula",
      description: "Premium residential complex with 50 units featuring smart home technology",
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

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="projects-slider-container">
      <div className="slider-content-wrapper">
        <div className="slider-header">
          <h2>Our Projects</h2>
          <div className="title-underline"></div>
          <p>Explore our landmark construction and development initiatives</p>
        </div>

        <div className="slider-wrapper">
          <div className={`slider-slide ${isAnimating ? 'animating' : ''}`}>
            <div className="slider-slide-content">
              <div className="slider-image-container">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
              </div>
              <div className="slider-text-content">
                <h3>{projects[currentIndex].title}</h3>
                <p className="project-description">{projects[currentIndex].description}</p>
              </div>
            </div>
          </div>
          
          <button className="slider-arrow-button left" onClick={goToPrevious} aria-label="Previous project">
            <ChevronLeft size={24} />
          </button>
          
          <button className="slider-arrow-button right" onClick={goToNext} aria-label="Next project">
            <ChevronRight size={24} />
          </button>

          <div className="slider-dots-wrapper">
            {projects.map((_, slideIndex) => (
              <button 
                key={slideIndex} 
                onClick={() => goToSlide(slideIndex)}
                className={`slider-dot ${currentIndex === slideIndex ? 'active' : ''}`}
                aria-label={`Go to project ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-slider-container {
          background-color: #f9fafb;
          padding: 4rem 1rem;
        }

        .slider-content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .slider-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .slider-header h2 {
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

        .slider-header p {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto;
        }

        .slider-wrapper {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .slider-slide {
          transition: transform 0.5s ease-in-out, opacity 0.3s ease;
        }

        .slider-slide.animating {
          opacity: 0.7;
        }

        .slider-slide-content {
          display: flex;
          flex-direction: column;
          
          @media (min-width: 768px) {
            flex-direction: row;
          }
        }

        .slider-image-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          
          @media (min-width: 768px) {
            width: 50%;
          }
        }

        .slider-image-container img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          
          @media (min-width: 768px) {
            height: 400px;
          }
        }

        .slider-text-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          
          @media (min-width: 768px) {
            width: 50%;
          }
        }

        .slider-text-content h3 {
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

        .slider-arrow-button {
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

        .slider-arrow-button:hover {
          background: #0b70f5;
          color: white;
        }

        .slider-arrow-button.left {
          left: 1rem;
        }

        .slider-arrow-button.right {
          right: 1rem;
        }

        .slider-dots-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .slider-dot {
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

        .slider-dot.active {
          background: #0b70f5;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .slider-header h2 {
            font-size: 2rem;
          }
          
          .slider-arrow-button {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
