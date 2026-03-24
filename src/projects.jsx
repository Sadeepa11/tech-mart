import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import img1 from './assets/sliderImages/slider1.jpg';
import img2 from './assets/sliderImages/slider2.jpg';
import img3 from './assets/sliderImages/slider3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Lakpahana Showroom Colombo",
      category: "Commercial",
      description: "A prestigious 15-story commercial development featuring sustainable design and cutting-edge steel architecture.",
      image: img2
    },
    {
      id: 2,
      title: "Dayata Kirula Complex",
      category: "Industrial",
      description: "Premium large-scale complex featuring integrated smart technology and high-strength structural integrity.",
      image: img3
    },
    {
      id: 3,
      title: "Steel Warehouse Alpha",
      category: "Logistics",
      description: "Fast-track construction of a modern logistics hub with 40m clear span steel portal frames.",
      image: img1
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating || slideIndex === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">Our Landmark Projects</h2>
          <div className="title-accent"></div>
          <p className="section-desc">We take pride in delivering iconic structures that define landscapes and empower industries.</p>
        </div>

        <div className="project-display">
          <div className="project-card-wrapper">
            <div className={`project-card ${isAnimating ? 'slide-out' : 'slide-in'}`}>
              <div className="project-image-side">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} loading="lazy" />
                <div className="category-tag">{projects[currentIndex].category}</div>
              </div>
              <div className="project-content-side">
                <div className="content-pad">
                  <h3 className="project-title">{projects[currentIndex].title}</h3>
                  <p className="project-text">{projects[currentIndex].description}</p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">Proprietary</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Completion</span>
                      <span className="meta-value">2024</span>
                    </div>
                  </div>
                  <button className="view-details-btn">
                    VIEW CASE STUDY <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-nav">
              <button className="nav-arrow prev" onClick={goToPrevious} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <button className="nav-arrow next" onClick={goToNext} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="dot-indicators">
            {projects.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => goToSlide(idx)}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: #fcfcfc;
          padding: 100px 0;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 700;
          color: var(--tech-orange);
          letter-spacing: 2px;
          display: block;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 20px;
        }

        .title-accent {
          width: 80px;
          height: 4px;
          background: var(--tech-orange);
          margin: 0 auto 24px;
          border-radius: 2px;
        }

        .section-desc {
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
        }

        .project-display {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        .project-card-wrapper {
          position: relative;
          background: white;
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .project-card {
          display: flex;
          min-height: 450px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .slide-in { opacity: 1; transform: translateX(0); }
        .slide-out { opacity: 0; transform: translateX(20px); }

        .project-image-side {
          flex: 1.2;
          position: relative;
          overflow: hidden;
        }

        .project-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover .project-image-side img {
          transform: scale(1.05);
        }

        .category-tag {
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--tech-orange);
          color: white;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .project-content-side {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
        }

        .content-pad {
          padding: 50px;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 16px;
        }

        .project-text {
          color: #555;
          line-height: 1.7;
          margin-bottom: 30px;
          font-size: 1.05rem;
        }

        .project-meta {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
          border-top: 1px solid #eee;
          padding-top: 24px;
        }

        .meta-label {
          display: block;
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .meta-value {
          font-weight: 700;
          color: #333;
        }

        .view-details-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          color: var(--tech-orange);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          cursor: pointer;
          padding: 0;
          transition: var(--transition);
        }

        .view-details-btn:hover {
          color: #000;
          gap: 15px;
        }

        /* Nav Arrows */
        .carousel-nav {
          position: absolute;
          bottom: 30px;
          right: 30px;
          display: flex;
          gap: 10px;
          z-index: 5;
        }

        .nav-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #eee;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          color: #333;
        }

        .nav-arrow:hover {
          background: var(--tech-orange);
          color: white;
          border-color: var(--tech-orange);
        }

        .dot-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .dot.active {
          background: var(--tech-orange);
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .project-card { flex-direction: column; }
          .project-image-side { min-height: 250px; }
          .content-pad { padding: 30px; }
          .carousel-nav { bottom: -70px; right: 50%; transform: translateX(50%); }
          .projects-section { padding-bottom: 120px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
