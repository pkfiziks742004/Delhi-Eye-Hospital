'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './VisionBannerSlider.css';

const bannerSlides = [
  {
    id: 1,
    image: '/images/banner-slide-1.png',
    alt: 'Clear Vision Stronger You - We care for your eyes',
    title: 'Clear Vision, Stronger You',
  },
  {
    id: 2,
    image: '/images/banner-slide-2.png',
    alt: 'See the World Clearly, Live Better - Expert Eye Care',
    title: 'See the World Clearly, Live Better',
  },
  {
    id: 3,
    image: '/images/banner-slide-3.png',
    alt: 'Better Vision. Better Life. - Advanced Technology & Trusted Care',
    title: 'Expert Eye Specialists',
  },
];

export default function VisionBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swipe left -> next
        setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
      } else {
        // swipe right -> prev
        setCurrentIndex((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
      }
    }
  };

  return (
    <div 
      className="vision-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="vision-slider-track">
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <Link
              key={slide.id}
              href="?modal=book-appointment"
              className={`vision-slide-item ${isActive ? 'active' : ''}`}
              aria-label={`${slide.title} - Book Consultation`}
              tabIndex={isActive ? 0 : -1}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="vision-slide-img"
              />
            </Link>
          );
        })}
      </div>

      {/* Prev Navigation Arrow */}
      <button 
        type="button" 
        className="vision-slider-btn prev-btn" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Next Navigation Arrow */}
      <button 
        type="button" 
        className="vision-slider-btn next-btn" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="vision-slider-dots">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`vision-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
