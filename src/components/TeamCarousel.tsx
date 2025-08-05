import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './TeamCarousel.css';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  miniAvatarUrl?: string;
}

// Deep Tech Team Members
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Neev",
    title: "Team Captain",
    handle: "neev",
    status: "Leading",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Neev",
  },
  {
    id: 2,
    name: "Vivan",
    title: "Lead Programmer",
    handle: "vivan",
    status: "Coding",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Vivan",
  },
  {
    id: 3,
    name: "Akshat",
    title: "Mechanical Engineer",
    handle: "akshat",
    status: "Building",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Akshat",
  },
  {
    id: 4,
    name: "Yesha",
    title: "Design Lead",
    handle: "yesha",
    status: "Designing",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Yesha",
  },
  {
    id: 5,
    name: "Tishya",
    title: "Strategy Analyst",
    handle: "tishya",
    status: "Planning",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Tishya",
  },
  {
    id: 6,
    name: "Maitreyi",
    title: "Software Engineer",
    handle: "maitreyi",
    status: "Developing",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Maitreyi",
  },
  {
    id: 7,
    name: "Anya V",
    title: "Hardware Specialist",
    handle: "anyav",
    status: "Assembling",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Anya+V",
  },
  {
    id: 8,
    name: "Anya Y",
    title: "Research Lead",
    handle: "anyay",
    status: "Researching",
    avatarUrl: "https://via.placeholder.com/360x500/1e293b/e2e8f0?text=Anya+Y",
  },
];

interface TeamCarouselProps {
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({
  autoRotate = true,
  rotationInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleContactClick = (member: TeamMember) => {
    console.log(`Contact ${member.name} clicked`);
    // Add your contact logic here
  };

  return (
    <div 
      className={`team-carousel ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-header">
        <h2 className="carousel-title">Meet Our Team</h2>
        <p className="carousel-subtitle">The brilliant minds behind Deep Tech</p>
      </div>

      <div className="carousel-container">
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={goToPrevious}
          aria-label="Previous team member"
        >
          ‹
        </button>

        <div className="carousel-track">
          <div 
            className="carousel-slides"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="carousel-slide">
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  handle={member.handle}
                  status={member.status}
                  contactText="Contact"
                  avatarUrl={member.avatarUrl}
                  miniAvatarUrl={member.miniAvatarUrl}
                  showUserInfo={true}
                  enableTilt={false}
                  enableMobileTilt={false}
                  onContactClick={() => handleContactClick(member)}
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-btn carousel-btn-next"
          onClick={goToNext}
          aria-label="Next team member"
        >
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to team member ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-info">
        <div className="member-counter">
          {currentIndex + 1} / {teamMembers.length}
        </div>
        <div className="member-name">
          {teamMembers[currentIndex].name}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
