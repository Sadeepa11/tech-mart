import { useState } from "react";
import { X } from "lucide-react";
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

const ProjectSlider = () => {
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
  ];

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(allImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = allImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.querySelector('.project-gallery-section').offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div className="project-gallery-section">
      <div className="gallery-grid">
        {currentImages.map((img, index) => {
          return (
            <div 
              key={index + startIndex} 
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
            >
              <div className="image-wrapper">
                <img src={img} alt={`Tech Mart Steel Structure Project ${index + startIndex + 1}`} loading="lazy" />
                <div className="image-overlay">
                  <span className="overlay-text">View Project</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="gallery-pagination">
          <button 
            className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <button className="modal-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full Project View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
