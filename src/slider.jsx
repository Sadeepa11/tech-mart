import { useState, useEffect } from 'react';
import img1 from './assets/sliderImages/slider0.jpg';
import img2 from './assets/sliderImages/slider2.jpg';
import img3 from './assets/sliderImages/slider3.jpg';
import img4 from './assets/sliderImages/slider4.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    { 
      id: 1, 
      image: img1,
      title: "PREMIUM STEEL SOLUTIONS",
      subtitle: "Experience the strength and durability of our industrial grade steel structures.",
      cta: "EXPLORE OUR SCOPE"
    },
    { 
      id: 2, 
      image: img2,
      title: "INNOVATIVE ARCHITECTURE",
      subtitle: "Modern designs that push the boundaries of civil engineering and construction.",
      cta: "VIEW PROJECTS"
    },
    { 
      id: 3, 
      image: img3,
      title: "STRUCTURAL INTEGRITY",
      subtitle: "Engineering excellence guaranteed for every factory and warehouse project.",
      cta: "OUR PRODUCTS"
    },
    { 
      id: 4, 
      image: img4,
      title: "BADMINTON COURTS & MORE",
      subtitle: "Versatile steel structures tailored to your specific recreational and industrial needs.",
      cta: "GET A QUOTE"
    }
  ];
  
  useEffect(() => {
    let slideInterval;
    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => slideInterval && clearInterval(slideInterval);
  }, [isAutoPlaying, slides.length]);
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="hero-slider">
      <div className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className="hero-slide">
            <div className="slide-split-container">
              <div className="slide-image-side">
                <div className="image-frame">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
              <div className="slide-text-side">
                <div className="text-content-v2">
                  <span className="slide-tag-v2">TECH MART EXCELLENCE</span>
                  {/* The main heading for SEO purposes, displaying the title of the current slide */}
                  {currentSlide === index && (
                    <h1 className="hero-title">{slide.title}</h1>
                  )}
                  {/* Other slide titles can remain h2 or p, depending on hierarchy */}
                  {currentSlide !== index && (
                    <h2 className="slide-title-v2">{slide.title}</h2>
                  )}
                  <p className="slide-subtitle-v2">{slide.subtitle}</p>
                  <div className="slide-actions-v2">
                    <button className="btn-v2 btn-white">{slide.cta}</button>
                    <button className="btn-v2 btn-outline-white">CONTACT US</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={prevSlide} className="nav-btn-v2 prev" aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <button onClick={nextSlide} className="nav-btn-v2 next" aria-label="Next">
        <ChevronRight size={28} />
      </button>
      
      <div className="slider-indicators-v2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator-v2 ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>

      <style>{`
        .hero-slider {
          width: 100%;
          height: 90vh;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          background-color: #ff6b00;
        }

        .slide-track {
          display: flex;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .hero-slide {
          flex: 0 0 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 5% 0;
        }

        .slide-split-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          max-width: 1300px;
        }

        .slide-image-side {
          display: flex;
          justify-content: center;
          animation: floatImage 4s ease-in-out infinite;
        }

        .image-frame {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
          border: 8px solid rgba(255,255,255,0.1);
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-text-side {
          color: white;
          padding-left: 20px;
        }

        .slide-tag-v2 {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #ff6b00;
          background: white;
          padding: 6px 16px;
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 24px;
        }

        .slide-title-v2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .slide-subtitle-v2 {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .slide-actions-v2 {
          display: flex;
          gap: 20px;
        }

        .btn-v2 {
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-white {
          background-color: white;
          color: #ff6b00;
          border: none;
        }

        .btn-white:hover {
          background-color: #000;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .btn-outline-white {
          background-color: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-outline-white:hover {
          background-color: white;
          color: #ff6b00;
          transform: translateY(-5px);
        }

        /* Nav Arrows */
        .nav-btn-v2 {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .nav-btn-v2:hover {
          background: white;
          color: #ff6b00;
        }

        .nav-btn-v2.prev { left: 40px; }
        .nav-btn-v2.next { right: 40px; }

        /* Indicators */
        .slider-indicators-v2 {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          z-index: 10;
        }

        .indicator-v2 {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-v2.active {
          background: white;
          transform: scale(1.5);
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 992px) {
          .slide-split-container { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .slide-text-side { padding-left: 0; }
          .slide-actions-v2 { justify-content: center; }
          .hero-slider { height: auto; padding: 100px 0; }
          .image-frame { max-width: 500px; margin: 0 auto; }
          .nav-btn-v2 { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Slider;