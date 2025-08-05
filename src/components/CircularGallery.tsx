import React, { useEffect, useRef } from 'react';
import './CircularGallery.css';

// Deep Tech Team Members
const teamMembers = [
  "Neev",
  "Vivan", 
  "Akshat",
  "Yesha",
  "Tishya",
  "Maitreyi",
  "Anya V",
  "Anya Y"
];

const CircularGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const currentRotation = useRef(0);
  const autoRotate = useRef(true);
  const autoRotateSpeed = 0.1; // Much slower auto rotation

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationId: number;
    
    const animate = () => {
      if (autoRotate.current && !isDragging.current) {
        currentRotation.current += autoRotateSpeed;
        gallery.style.transform = `rotateY(${currentRotation.current}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = currentRotation.current;
    autoRotate.current = false;
    
    if (galleryRef.current) {
      galleryRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - startX.current;
    const sensitivity = 0.5;
    currentRotation.current = startRotation.current + (deltaX * sensitivity);
    
    if (galleryRef.current) {
      galleryRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    autoRotate.current = true;
    
    if (galleryRef.current) {
      galleryRef.current.style.cursor = 'grab';
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startRotation.current = currentRotation.current;
    autoRotate.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.touches[0].clientX - startX.current;
    const sensitivity = 0.5;
    currentRotation.current = startRotation.current + (deltaX * sensitivity);
    
    if (galleryRef.current) {
      galleryRef.current.style.transform = `rotateY(${currentRotation.current}deg)`;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    autoRotate.current = true;
  };

  return (
    <div className="circular-gallery">
      <div 
        ref={galleryRef} 
        className="gallery-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {teamMembers.map((name, index) => (
          <div
            key={index}
            className="gallery-item cursor-target"
            style={{
              transform: `rotateY(${(index * 360) / teamMembers.length}deg) translateZ(200px)`
            }}
          >
            <div className="member-card cursor-target">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <span className="photo-icon">👤</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{name}</h3>
                <p className="member-role">Team Member</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularGallery;
