'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import './RealTransformations.css';
import VisionBannerSlider from './VisionBannerSlider';

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

        {/* Clean Premium Auto-Sliding 3-Banner Carousel */}
        <div className="real-transform-banner-wrapper">
          <VisionBannerSlider />
        </div>

      </div>
    </section>
  );
}
