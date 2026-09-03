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
];

export default function VisionBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide timer (slides every 4.5s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

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
