'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import './RealTransformations.css';

interface TransformationItem {
  id: string;
  title: string;
  image: string;
}

const transformations: TransformationItem[] = [
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    image: '/images/transformations/cataract.jpg',
  },
  {
    id: 'squint',
    title: 'Squint Correction',
    image: '/images/transformations/squint.jpg',
  },
  {
    id: 'pterygium',
    title: 'Pterygium Excision',
    image: '/images/transformations/pterygium.jpg',
  },
  {
    id: 'blepharoplasty',
    title: 'Ptosis & Eyelid Lift',
    image: '/images/transformations/blepharoplasty.jpg',
  },
];

function TransformationCard({ item }: { item: TransformationItem }) {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%
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
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
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
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
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
        {/* Full Image (Right Side - AFTER) */}
        <div className="split-layer">
          <img src={item.image} alt={`${item.title} Result`} />
          <span className="pill-badge after">AFTER</span>
        </div>

        {/* Clipped Layer (Left Side - BEFORE) */}
        <div 
          className="split-layer"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={item.image} alt={`${item.title} Pre-Op`} />
          <span className="pill-badge before">BEFORE</span>
        </div>

        {/* Divider Line & Interactive Center Handle */}
        <div 
          className="split-divider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="split-center-btn" aria-label="Drag to compare before and after">
            {/* Two-way horizontal arrows icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        
        {/* Header (Exact wording and structure from user's design) */}
        <div className="real-transform-header">
          <span className="real-transform-badge">REAL TRANSFORMATIONS</span>
          <h2 className="real-transform-title">Before &amp; After</h2>
          <p className="real-transform-subtitle">Real Results. Real People. Real Confidence.</p>
        </div>

        {/* 4 Before & After Cards Grid */}
        <div className="real-transform-grid">
          {transformations.map((item) => (
            <TransformationCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="real-transform-cta">
          <div className="cta-text-left">
            <h3>Experience Clear &amp; Healthy Vision Today</h3>
            <p>Schedule your clinical evaluation with our senior eye specialists.</p>
          </div>
          <Link href="?modal=book-appointment" className="btn btn-orange" style={{ whiteSpace: 'nowrap' }}>
            Book Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
