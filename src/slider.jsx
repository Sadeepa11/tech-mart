import React, { useState, useEffect } from 'react';

import img1 from './assets/sliderImages/slider0.jpg';
import img2 from './assets/sliderImages/slider2.jpg';
import img3 from './assets/sliderImages/slider3.jpg';
import img4 from './assets/sliderImages/slider4.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  
  // Import images directly
  const slides = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 }
  ];
  
  // Auto-play functionality
  useEffect(() => {
    let slideInterval;
    
    if (isAutoPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isAutoPlaying, slides.length]);
  
  // Navigate to next/previous slide
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
  
  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  
  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    
    // Swipe threshold
    if (direction > 10) {
      nextSlide();
    }
    
    if (direction < -10) {
      prevSlide();
    }
    
    setTouchPosition(null);
  };
  
  // Responsive styles
  const styles = {
    sliderContainer: {
      width: '100%', // Changed from 100vw to 100% to prevent overflow
      position: 'relative',
      maxWidth: '100%', // Ensures content doesn't exceed viewport width
      overflow: 'hidden', // Prevents horizontal scrolling
      touchAction: 'pan-y'
    },
    slideTrack: {
      display: 'flex',
      height: '100%',
      transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: `translateX(-${currentSlide * 100}%)`
    },
    slide: {
      width: '100%',
      flexShrink: 0,
      position: 'relative',
      height: '100%'
    },
    slideImage: {
      width: '100%', // Changed from 100vw to 100% to stay within container
      height: '500px',
      objectFit: 'contain', // Changed from contain to cover for better visual
      display: 'block'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0, 0, 0, 0.3)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'all 0.3s ease',
      opacity: 0.7
    },
    prevButton: {
      left: '20px'
    },
    nextButton: {
      right: '20px'
    },
    indicators: {
      position: 'absolute',
      bottom: '24px',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px', // Re-added gap for better spacing
      zIndex: 10
    },
    indicator: {
      width: '10px',
      height: '10px',
      margin: '0 0px', // Added margin as an alternative to gap
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0
    },
    activeIndicator: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: 'scale(1.2)'
    }
  };

  // Media query handling
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Responsive adjustments
  const responsiveStyles = {
    sliderContainer: {
      ...styles.sliderContainer,
      height: windowWidth < 768 ? '300px' : '500px' // Responsive height
    },
    slideImage: {
      ...styles.slideImage,
      height: windowWidth < 768 ? '300px' : '500px' // Responsive image height
    },
    navButton: {
      ...styles.navButton,
      width: windowWidth < 768 ? '36px' : '48px',
      height: windowWidth < 768 ? '36px' : '48px',
      opacity: windowWidth < 768 ? 0.5 : 0.7
    },
    indicators: {
      ...styles.indicators,
      bottom: windowWidth < 768 ? '16px' : '24px'
    },
    indicator: {
      ...styles.indicator,
      width: windowWidth < 768 ? '8px' : '10px',
      height: windowWidth < 768 ? '8px' : '10px'
    }
  };

  return (
    <div 
      style={responsiveStyles.sliderContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div style={styles.slideTrack}>
        {slides.map((slide) => (
          <div key={slide.id} style={styles.slide}>
            <img 
              src={slide.image} 
              alt={`Slide ${slide.id}`} 
              style={responsiveStyles.slideImage} 
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        style={{...responsiveStyles.navButton, ...styles.prevButton}}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        style={{...responsiveStyles.navButton, ...styles.nextButton}}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      
      {/* Indicators/dots */}
      <div style={responsiveStyles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...responsiveStyles.indicator,
              ...(currentSlide === index ? styles.activeIndicator : {})
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;