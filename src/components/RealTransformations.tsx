'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import './RealTransformations.css';
import VisionBannerSlider from './VisionBannerSlider';

interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: TransformationItem[] = [
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    subtitle: 'Bladeless Micro-Incision Phaco',
    tag: 'Crystal Clear Vision',
    beforeImage: '/images/transformations/cataract-before.jpg',
    afterImage: '/images/transformations/cataract-after.jpg',
  },
  {
    id: 'squint',
    title: 'Squint Correction',
    subtitle: 'Precision Muscle Alignment',
    tag: 'Perfect Eye Symmetry',
    beforeImage: '/images/transformations/squint-before.jpg',
    afterImage: '/images/transformations/squint-after.jpg',
  },
  {
    id: 'pterygium',
    title: 'Pterygium Excision',
    subtitle: 'Autograft Sutureless Technique',
    tag: 'Healthy Clear Sclera',
    beforeImage: '/images/transformations/pterygium-before.jpg',
    afterImage: '/images/transformations/pterygium-after.jpg',
  },
  {
    id: 'blepharoplasty',
    title: 'Ptosis & Eyelid Lift',
    subtitle: 'Oculoplastic Muscle Repair',
    tag: 'Youthful Open Contour',
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
        {/* Bottom Layer: AFTER IMAGE */}
        <div className="split-layer after-layer">
          <img 
            src={item.afterImage} 
            alt={`${item.title} After Treatment`} 
            draggable={false}
          />
          <span 
            className="pill-badge after"
            style={{ opacity: sliderPosition < 88 ? 1 : 0.2 }}
          >
            <span className="badge-glow-dot"></span> AFTER
          </span>
        </div>

        {/* Top Layer: BEFORE IMAGE */}
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
            style={{ opacity: sliderPosition > 12 ? 1 : 0.2 }}
          >
            BEFORE
          </span>
        </div>

        {/* Vertical Divider Line with Center Drag Knob */}
        <div 
          className="split-divider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="split-center-btn" aria-label="Drag to compare before and after">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6" style={{ display: 'none' }}></polyline>
              <path d="m8 7-4 4 4 4"/>
              <path d="M4 11h16"/>
              <path d="m16 17 4-4-4-4"/>
            </svg>
          </div>
        </div>

        {/* Floating Interactive Hint */}
        <div className="drag-hint-pill">
          <span>⇄ Slide to compare</span>
        </div>
      </div>

      <div className="transform-card-info">
        <div className="transform-badge-tag">{item.tag}</div>
        <h3 className="transform-item-title">{item.title}</h3>
        <p className="transform-item-sub">{item.subtitle}</p>
      </div>
    </div>
  );
}

export default function RealTransformations() {
  return (
    <section className="real-transformations-section" id="transformations">
      <div className="container">
        
        {/* Header Section */}
        <div className="real-transform-header">
          <div className="real-transform-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>PROVEN CLINICAL OUTCOMES</span>
          </div>

          <h2 className="real-transform-title">
            Real Transformations, <span>Real Results</span>
          </h2>

          <p className="real-transform-subtitle">
            See actual clinical before &amp; after results of our precision surgical treatments.
          </p>

          <div className="real-transform-trust-row">
            <span className="trust-pill">✓ 100% Verified Hospital Cases</span>
            <span className="trust-pill">✓ Advanced Bladeless Technology</span>
            <span className="trust-pill">✓ 99.4% Patient Satisfaction</span>
          </div>
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
