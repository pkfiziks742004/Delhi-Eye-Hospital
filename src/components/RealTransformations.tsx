'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import './RealTransformations.css';

interface TransformationCase {
  id: string;
  tabLabel: string;
  category: string;
  patientName: string;
  ageOccupation: string;
  procedure: string;
  recoveryTime: string;
  beforeStatus: string;
  afterStatus: string;
  visionMetricBefore: string;
  visionMetricAfter: string;
  quote: string;
  simulationType: 'lasik' | 'cataract' | 'squint' | 'cornea';
  bgImage: string;
}

const cases: TransformationCase[] = [
  {
    id: 'lasik',
    tabLabel: 'Contoura LASIK',
    category: 'Refractive & Specs Removal',
    patientName: 'Rahul Sharma',
    ageOccupation: '28 Yrs • Software Engineer',
    procedure: 'Blade-Free Contoura Vision LASIK',
    recoveryTime: '24 Hours',
    beforeStatus: 'High Myopia (-5.50 D) with Astigmatism & severe halo glare',
    afterStatus: '6/6 HD Crystal-Clear Vision, 100% Spectacle Free',
    visionMetricBefore: '6/60 (Blurred)',
    visionMetricAfter: '6/6 HD (Sharp)',
    quote: '"I had been wearing thick glasses since school. Within 24 hours of LASIK at Delhi Eye Hospital, my vision is sharper than ever!"',
    simulationType: 'lasik',
    bgImage: '/images/hero-abstract.png',
  },
  {
    id: 'cataract',
    tabLabel: 'Laser Cataract & IOL',
    category: 'Advanced Cataract Surgery',
    patientName: 'Sunita Devi',
    ageOccupation: '64 Yrs • Homemaker',
    procedure: 'Micro-Incision Phaco + Trifocal IOL',
    recoveryTime: '48 Hours',
    beforeStatus: 'Dense cloudy nuclear cataract, yellow hazy vision & low contrast',
    afterStatus: 'Full range sharp vision (Near, Intermediate, Distance)',
    visionMetricBefore: '6/36 (Cloudy)',
    visionMetricAfter: '6/6 (Crisp & Bright)',
    quote: '"Reading books and cooking without reading glasses feels like a miracle. The care and painless surgery were outstanding."',
    simulationType: 'cataract',
    bgImage: '/images/bulding.png',
  },
  {
    id: 'squint',
    tabLabel: 'Squint Alignment',
    category: 'Pediatric & Adult Strabismus',
    patientName: 'Aarav Verma',
    ageOccupation: '16 Yrs • Student',
    procedure: 'Bilateral Adjustable Squint Correction',
    recoveryTime: '3-4 Days',
    beforeStatus: 'Inward Esotropia Deviation & loss of binocular depth',
    afterStatus: 'Perfect anatomical symmetry & restored 3D stereoscopic vision',
    visionMetricBefore: '35° Misaligned',
    visionMetricAfter: '0° Centered',
    quote: '"My son regained full ocular symmetry and his confidence is back. We cannot thank the surgical team enough."',
    simulationType: 'squint',
    bgImage: '/images/premium_pediatric.jpg',
  },
  {
    id: 'cornea',
    tabLabel: 'Pterygium & Cornea',
    category: 'Corneal Reconstruction',
    patientName: 'Vikram Singh',
    ageOccupation: '48 Yrs • Civil Contractor',
    procedure: 'Sutureless Conjunctival Autograft',
    recoveryTime: '5 Days',
    beforeStatus: 'Inflamed vascular tissue growth obstructing cornea & continuous redness',
    afterStatus: 'Clean, smooth, clear cornea and natural white sclera',
    visionMetricBefore: 'Irritated / Impaired',
    visionMetricAfter: 'Pristine & Calm',
    quote: '"The persistent redness and foreign body sensation vanished completely. The surgical precision was top tier."',
    simulationType: 'cornea',
    bgImage: '/images/eye-realistic.png',
  },
];

export default function RealTransformations() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = cases[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="transformations-section" id="transformations" onMouseUp={handleMouseUp}>
      <div className="container">
        
        {/* Header Section */}
        <div className="transform-header">
          <div className="transform-badge">
            <span className="pulse-dot"></span>
            REAL TRANSFORMATIONS
          </div>
          <h2 className="transform-title">
            Before &amp; After <span>Clinical Outcomes</span>
          </h2>
          <p className="transform-subtitle">
            Real Results. Real People. Real Confidence.
          </p>
          <p className="transform-desc">
            Explore verified patient outcomes achieved through our precision ophthalmic microsurgery, bladeless laser technology, and specialized eye care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="transform-tabs">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              className={`transform-tab-btn ${activeCaseIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
            >
              <span>{idx === 0 ? '✨' : idx === 1 ? '👁️' : idx === 2 ? '🎯' : '🔬'}</span>
              {c.tabLabel}
            </button>
          ))}
        </div>

        {/* Interactive Showcase Card */}
        <div className="transform-showcase-card">
          
          {/* Left: Interactive Before & After Visual Slider */}
          <div 
            className="comparison-container" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* Base (After - Crystal Clear / Corrected) Layer */}
            <div className="comparison-image-wrapper">
              <div className="comparison-view">
                <img 
                  src={activeCase.bgImage} 
                  alt="After Treatment Vision" 
                  className="scene-bg scene-clear" 
                />
                <span className="view-badge after-badge">AFTER PROCEDURE</span>
                <div className="vision-label-overlay">
                  <span>✨ <strong>Post-Op:</strong> {activeCase.visionMetricAfter}</span>
                  <span style={{ color: '#00D4B2' }}>✓ Restored</span>
                </div>
              </div>
            </div>

            {/* Clipped Top Layer (Before - Simulated Impairment) */}
            <div 
              className="comparison-image-wrapper"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div className="comparison-view">
                <img 
                  src={activeCase.bgImage} 
                  alt="Before Treatment Vision" 
                  className={`scene-bg ${
                    activeCase.simulationType === 'cataract' 
                      ? 'scene-cataract' 
                      : activeCase.simulationType === 'lasik' 
                        ? 'scene-blurred' 
                        : 'scene-blurred'
                  }`} 
                />
                <span className="view-badge before-badge">BEFORE TREATMENT</span>
                <div className="vision-label-overlay" style={{ background: 'rgba(20, 0, 0, 0.75)' }}>
                  <span>⚠️ <strong>Pre-Op:</strong> {activeCase.visionMetricBefore}</span>
                  <span style={{ color: '#f87171' }}>Impaired</span>
                </div>
              </div>
            </div>

            {/* Drag Handle Divider Line */}
            <div 
              className="comparison-slider-line" 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="comparison-slider-handle" aria-label="Drag slider to compare before and after">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                  <polyline points="9 18 3 12 9 6" style={{ display: 'none' }}></polyline>
                  <path d="M17 12H7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Clinical Details & Patient Testimonial */}
          <div className="transform-info-panel">
            <div className="patient-header">
              <span className="patient-category-tag">{activeCase.category}</span>
              <div className="patient-name-row">
                <div>
                  <h3 className="patient-name">{activeCase.patientName}</h3>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{activeCase.ageOccupation}</span>
                </div>
                <div className="patient-stars" title="5 Star Rated Experience">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Clinical Metrics */}
            <div className="patient-details-grid">
              <div className="patient-metric-box">
                <div className="metric-label">Procedure Performed</div>
                <div className="metric-val">{activeCase.procedure}</div>
              </div>
              <div className="patient-metric-box">
                <div className="metric-label">Recovery Timeline</div>
                <div className="metric-val highlight">{activeCase.recoveryTime}</div>
              </div>
              <div className="patient-metric-box">
                <div className="metric-label">Pre-Operative State</div>
                <div className="metric-val" style={{ fontSize: '0.9rem', color: '#fca5a5' }}>{activeCase.beforeStatus}</div>
              </div>
              <div className="patient-metric-box">
                <div className="metric-label">Post-Operative Result</div>
                <div className="metric-val highlight" style={{ fontSize: '0.9rem' }}>{activeCase.afterStatus}</div>
              </div>
            </div>

            {/* Patient Testimonial Quote */}
            <div className="patient-quote">
              {activeCase.quote}
            </div>

            {/* CTA Button */}
            <div className="patient-actions">
              <Link href="?modal=book-appointment" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                Book Your Vision Evaluation ➔
              </Link>
              <Link href="/treatments" className="btn btn-secondary" style={{ padding: '0.85rem 1.5rem', background: 'rgba(255,255,255,0.08)', color: '#ffffff' }}>
                View All Treatments
              </Link>
            </div>
          </div>

        </div>

        {/* Quick Proven Impact Bar */}
        <div className="transform-stats-bar">
          <div className="stat-item">
            <h3>25,000+</h3>
            <p>Eyes Restored Successfully</p>
          </div>
          <div className="stat-item">
            <h3>99.4%</h3>
            <p>Clinical Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Blade-Free Laser Precision</p>
          </div>
          <div className="stat-item">
            <h3>4.9 / 5</h3>
            <p>Patient Satisfaction Score</p>
          </div>
        </div>

      </div>
    </section>
  );
}
