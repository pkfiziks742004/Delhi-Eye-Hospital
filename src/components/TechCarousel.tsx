"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Technology } from '@/data/hospital';

export default function TechCarousel({ technologies = [] }: { technologies?: Technology[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(timer);
  }, [technologies.length]);

  return (
    <div className="tech-cards-wrapper" style={{ overflow: 'hidden', width: '100%', padding: '1rem 0' }}>
      <div 
        className="tech-carousel-inner" 
        style={{ 
          display: 'flex', 
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {technologies.map((tech, index) => (
          <div key={tech.id} style={{ flex: '0 0 100%', minWidth: '100%', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
            <div className="tech-card">
              <div className="tech-card-icon">
                {index === 0 ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
                ) : index === 1 ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                ) : index === 2 ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                )}
              </div>
              <h3 className="tech-card-title">{tech.name}</h3>
              <p className="tech-card-desc">{tech.description}</p>
              <Link href="#" className="tech-card-link">
                Explore Technology <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Indicators */}
      <div className="carousel-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '2rem' }}>
         {technologies.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: currentIndex === idx ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'background-color 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
         ))}
      </div>
    </div>
  );
}
