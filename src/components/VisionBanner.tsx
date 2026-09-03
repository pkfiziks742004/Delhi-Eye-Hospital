'use client';

import React from 'react';
import Link from 'next/link';
import './VisionBanner.css';

export default function VisionBanner() {
  return (
    <section className="vision-banner-section">
      <div className="container">
        <div className="vision-banner-card">
          
          {/* Top-Left Decorative Dot Matrix */}
          <div className="banner-dot-pattern"></div>
          
          {/* Concentric Wave Rings */}
          <div className="banner-wave-rings"></div>

          {/* Left Text & Value Proposition Column */}
          <div className="vision-banner-content">
            <h2 className="vision-banner-title">
              See the World<br />
              Clearly, <span>Live Better</span>
            </h2>

            <p className="vision-banner-desc">
              Expert eye care for a brighter tomorrow.<br />
              Your vision, our mission.
            </p>

            {/* Glowing Border Pill */}
            <Link href="?modal=book-appointment" className="vision-banner-pill">
              <span className="pill-eye-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span className="pill-label-text">
                Better Vision. <strong>Better Life.</strong>
              </span>
            </Link>

            {/* 3 Value Pillars */}
            <div className="banner-features-row">
              {/* Feature 1 */}
              <div className="feature-col-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div className="feature-text-block">
                  Advanced<br />Technology
                </div>
              </div>

              {/* Feature 2 */}
              <div className="feature-col-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="feature-text-block">
                  Trusted &amp;<br />Safe Care
                </div>
              </div>

              {/* Feature 3 */}
              <div className="feature-col-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="feature-text-block">
                  Expert<br />Specialists
                </div>
              </div>
            </div>

          </div>

          {/* Right Doctor & Clinical Environment Visual */}
          <div className="vision-banner-visual">
            
            {/* Background Snellen Eye Chart */}
            <div className="chart-bg-overlay">
              <div className="chart-row-1">E</div>
              <div className="chart-row-2">F P</div>
              <div className="chart-row-3">T O Z</div>
              <div className="chart-row-4">L P E D</div>
            </div>

            {/* Doctor Photo */}
            <img 
              src="/doctor-1-cinematic.png" 
              alt="Expert Eye Specialist" 
              className="banner-doctor-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
