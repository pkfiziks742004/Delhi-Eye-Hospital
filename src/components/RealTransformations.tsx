'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import './RealTransformations.css';

interface TransformationItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: TransformationItem[] = [
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    beforeImage: '/images/transformations/cataract-before.jpg',
    afterImage: '/images/transformations/cataract-after.jpg',
  },
  {
    id: 'squint',
    title: 'Squint Correction',
    beforeImage: '/images/transformations/squint-before.jpg',
    afterImage: '/images/transformations/squint-after.jpg',
  },
  {
    id: 'pterygium',
    title: 'Pterygium Excision',
    beforeImage: '/images/transformations/pterygium-before.jpg',
    afterImage: '/images/transformations/pterygium-after.jpg',
  },
  {
    id: 'blepharoplasty',
    title: 'Ptosis & Eyelid Lift',
    beforeImage: '/images/transformations/blepharoplasty-before.jpg',
    afterImage: '/images/transformations/blepharoplasty-after.jpg',
  },
];

function TransformationCard({ item }: { item: TransformationItem }) {
  const [sliderPosition, setSliderPosition] = useState(50); // 0% (All After) to 100% (All Before)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div className="transform-item-card">
      <div 
        className="interactive-split-box"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Bottom Layer: AFTER IMAGE (Full width/height) */}
        <div className="split-layer after-layer">
          <img 
            src={item.afterImage} 
            alt={`${item.title} After Treatment`} 
            draggable={false}
          />
          <span 
            className="pill-badge after"
            style={{ opacity: sliderPosition < 90 ? 1 : 0.2 }}
          >
            AFTER
          </span>
        </div>

        {/* Top Layer: BEFORE IMAGE (Clipped precisely to slider position) */}
        <div 
          className="split-layer before-layer"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src={item.beforeImage} 
            alt={`${item.title} Before Treatment`} 
            draggable={false}
          />
          <span 
            className="pill-badge before"
            style={{ opacity: sliderPosition > 10 ? 1 : 0.2 }}
          >
            BEFORE
          </span>
        </div>

        {/* Vertical Divider Line with Center Drag Button */}
        <div 
          className="split-divider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="split-center-btn" aria-label="Drag to compare before and after">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8 7-4 4 4 4"/>
              <path d="M4 11h16"/>
              <path d="m16 17 4-4-4-4"/>
            </svg>
          </div>
        </div>
      </div>

      <h3 className="transform-item-title">{item.title}</h3>
    </div>
  );
}

export default function RealTransformations() {
  return (
    <section className="real-transformations-section" id="transformations">
      <div className="container">
        
        {/* Header Section */}
        <div className="real-transform-header">
          <span className="real-transform-badge">REAL TRANSFORMATIONS</span>
          <h2 className="real-transform-title">Before &amp; After</h2>
          <p className="real-transform-subtitle">Real Results. Real People. Real Confidence.</p>
        </div>

        {/* 4 Cards Grid */}
        <div className="real-transform-grid">
          {transformations.map((item) => (
            <TransformationCard key={item.id} item={item} />
          ))}
        </div>

        {/* Clean Premium Vision Banner (Full Width, Compact Sleek Height, Ultra-Sharp) */}
        <div className="real-transform-banner-wrapper">
          <Link 
            href="?modal=book-appointment" 
            className="transform-vision-card"
            aria-label="See the World Clearly, Live Better - Book Consultation"
          >
            {/* Top-Left Dot Matrix Pattern */}
            <div className="banner-dot-pattern"></div>
            
            {/* Background Wave Rings */}
            <div className="banner-wave-rings"></div>

            {/* Left Content */}
            <div className="tv-content">
              <h3 className="tv-title">
                See the World<br />
                Clearly, <span>Live Better</span>
              </h3>

              <p className="tv-desc">
                Expert eye care for a brighter tomorrow. Your vision, our mission.
              </p>

              {/* Glowing Pill Button */}
              <div className="tv-pill">
                <span className="tv-pill-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
                <span className="tv-pill-text">
                  Better Vision. <strong>Better Life.</strong>
                </span>
              </div>

              {/* 3 Pillars Footer */}
              <div className="tv-pillars-row">
                <div className="tv-pillar">
                  <span className="tv-pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                  <span className="tv-pillar-text">Advanced<br />Technology</span>
                </div>

                <div className="tv-pillar">
                  <span className="tv-pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </span>
                  <span className="tv-pillar-text">Trusted &amp;<br />Safe Care</span>
                </div>

                <div className="tv-pillar">
                  <span className="tv-pillar-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <span className="tv-pillar-text">Expert<br />Specialists</span>
                </div>
              </div>
            </div>

            {/* Right Doctor Visual */}
            <div className="tv-visual">
              {/* Eye Chart Overlay */}
              <div className="tv-chart-bg">
                <div style={{ fontSize: '1.8rem' }}>E</div>
                <div style={{ fontSize: '1.2rem', letterSpacing: '4px' }}>F P</div>
                <div style={{ fontSize: '0.9rem', letterSpacing: '3px' }}>T O Z</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>L P E D</div>
              </div>

              {/* Doctor Cutout */}
              <img 
                src="/images/banner-doctor.png" 
                alt="Expert Ophthalmologist" 
                className="tv-doctor-img"
              />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
