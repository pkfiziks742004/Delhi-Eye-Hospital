'use client';

import React from 'react';
import Link from 'next/link';
import './VisionBanner.css';

export default function VisionBanner() {
  return (
    <section className="vision-banner-section" id="vision-banner">
      <div className="container">
        <Link 
          href="?modal=book-appointment" 
          className="vision-banner-wrapper"
          aria-label="See the World Clearly, Live Better - Book Consultation"
        >
          <img 
            src="/images/see-the-world-banner-clean.png" 
            alt="See the World Clearly, Live Better - Expert Eye Care" 
            className="vision-banner-img"
          />
        </Link>
      </div>
    </section>
  );
}
