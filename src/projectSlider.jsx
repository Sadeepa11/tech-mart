import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectSlider.css";

import img1 from './assets/PSlider/imgs1.jpg';
import img2 from './assets/PSlider/imgs2.jpg';
import img3 from './assets/PSlider/imgs3.jpg';
import img4 from './assets/PSlider/imgs4.jpg';
import img5 from './assets/PSlider/imgs5.jpg';
import img6 from './assets/PSlider/imgs6.jpg';
import img7 from './assets/PSlider/imgs7.jpg';
import img8 from './assets/PSlider/imgs8.jpg';
import img9 from './assets/PSlider/imgs9.jpg';
import img10 from './assets/PSlider/imgs10.jpg';
import img11 from './assets/PSlider/imgs11.jpg';
import img12 from './assets/PSlider/imgs12.jpg';
import img13 from './assets/PSlider/imgs13.jpg';
import img14 from './assets/PSlider/imgs14.jpg';
import img15 from './assets/PSlider/imgs15.jpg';
import img16 from './assets/PSlider/imgs16.jpg';
import img17 from './assets/PSlider/imgs17.jpg';
import img18 from './assets/PSlider/imgs18.jpg';
import img19 from './assets/PSlider/imgs19.jpg';
import img20 from './assets/PSlider/imgs20.jpg';
import img21 from './assets/PSlider/imgs21.jpg';



// import owner from "../assets/images/owner/owner.jpg";

// import { img } from "framer-motion/client";
const ProjectSlider = () => {
  const flowers = [
    {

      image: img1,
     
    },
    {
  
      image:img2,
   
    },
    {
  
      image: img3,
    
    },
    {
  
      image: img4,
    
    },
    {
  
      image: img5,
    
    },
    {
  
      image: img6,
    
    },
    {
  
      image: img7,
    
    },
    {
  
      image: img8,
    
    },
    {
  
      image: img9,
    
    },
    {
  
      image: img10,
    
    },
    {
  
      image: img11,
    
    },
    {
  
      image: img12,
    
    },
    {
  
      image: img13,
    
    },
    {
  
      image: img14,
    
    },
    {
  
      image: img15,
    
    },
    {
  
      image: img16,
    
    },
    {
  
      image: img17,
    
    },
    {
  
      image: img18,
    
    },
    {
  
      image: img19,
    
    },
    {
  
      image: img20,
    
    },   
    {
  
      image: img21,
    
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flowers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flowers.length) % flowers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (



    
    <div className="slider-container">
      <div className="slider-wrapper">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={flower.image}
              // alt={flower.name}
              className="slide-image"
            />
            {/* <div className="slide-content">
              <h2 className="slide-title">{flower.name}</h2>
              <p className="slide-description">{flower.description}</p>
            </div> */}
          </div>
        ))}

        <div className="slider-nav">
          <button className="nav-button" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-button" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="thumbnails">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <img src={flower.image} alt={flower.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
