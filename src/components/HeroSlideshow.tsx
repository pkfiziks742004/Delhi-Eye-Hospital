'use client';

import { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

export default function HeroSlideshow({ images, interval = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, index) => (
        <div
          key={img}
          className={`hero-slide ${index === currentIndex ? 'hero-slide-active' : ''}`}
          style={{ backgroundImage: `url("${img}")` }}
        />
      ))}
      <div className="hero-slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-slide-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
