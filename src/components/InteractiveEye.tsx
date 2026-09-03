'use client';
import React, { useState } from 'react';
import './interactive-eye.css';
import Link from 'next/link';

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  label: string; // The text to display in the pill
  title: string;
  description: string;
  link: string;
  align: 'left' | 'right' | 'top'; // Which side the popup opens
}

const hotspots: Hotspot[] = [
  // LEFT SIDE
  {
    id: 'eyelid', x: 17, y: 17, align: 'right', label: 'EYELID',
    title: 'Eyelid Care',
    description: 'Expert treatment for ptosis, blepharitis, and specialized oculoplastic surgeries for functional and cosmetic eyelid restoration.',
    link: '?modal=book-appointment'
  },
  {
    id: 'eyelashes', x: 10, y: 29, align: 'right', label: 'EYELASHES',
    title: 'Trichiasis & Eyelash Disorders',
    description: 'Management of misdirected eyelashes and eyelid margin diseases to prevent corneal damage and ensure ocular comfort.',
    link: '?modal=book-appointment'
  },
  {
    id: 'conjunctiva', x: 12, y: 45.5, align: 'right', label: 'CONJUNCTIVA',
    title: 'Ocular Surface Center',
    description: 'Advanced management of dry eye disease, allergic conjunctivitis, and pterygium surgeries with autograft.',
    link: '?modal=book-appointment'
  },
  {
    id: 'sclera', x: 14, y: 60, align: 'right', label: 'SCLERA',
    title: 'Scleral & Uvea Services',
    description: 'Specialized diagnostic and therapeutic approaches for scleritis and complex uveitic inflammatory conditions.',
    link: '?modal=book-appointment'
  },
  {
    id: 'lacrimal', x: 25, y: 79, align: 'right', label: 'LACRIMAL CARUNCLE',
    title: 'Lacrimal Caruncle',
    description: 'Treatment for inflammatory lesions and structural abnormalities of the medial canthus and lacrimal apparatus.',
    link: '?modal=book-appointment'
  },

  // RIGHT SIDE
  {
    id: 'cornea', x: 84, y: 21, align: 'left', label: 'CORNEA',
    title: 'Cornea & Refractive Center',
    description: 'State-of-the-art LASIK, SMILE, and corneal transplant surgeries (PKP, DSEK) utilizing ultra-precise laser technology.',
    link: '?modal=book-appointment'
  },
  {
    id: 'iris', x: 86, y: 32, align: 'left', label: 'IRIS',
    title: 'Iris & Anterior Segment',
    description: 'Comprehensive management of iritis, trauma reconstruction, and specialized implantable collamer lenses (ICL).',
    link: '?modal=book-appointment'
  },
  {
    id: 'pupil', x: 85, y: 50, align: 'left', label: 'PUPIL',
    title: 'Advanced Cataract Services',
    description: 'Painless, blade-free micro-incision cataract surgery with premium trifocal and toric intraocular lenses.',
    link: '?modal=book-appointment'
  },
  {
    id: 'limbal', x: 87, y: 66, align: 'left', label: 'LIMBAL RING',
    title: 'Limbal Stem Cell Therapy',
    description: 'Pioneering regenerative treatments for ocular surface burns and limbal stem cell deficiency.',
    link: '?modal=book-appointment'
  },
  {
    id: 'tearduct', x: 76, y: 81, align: 'left', label: 'TEAR DUCT',
    title: 'DCR & Tear Duct Surgery',
    description: 'Endoscopic and conventional procedures to clear blocked tear ducts (epiphora) restoring normal tear drainage.',
    link: '?modal=book-appointment'
  },

  // BOTTOM
  {
    id: 'lower-eyelid', x: 50, y: 95, align: 'top', label: 'LOWER EYELID',
    title: 'Lower Eyelid & Aesthetics',
    description: 'Specialized blepharoplasty and management of ectropion/entropion to restore the structural integrity of the lower lid.',
    link: '?modal=book-appointment'
  }
];

export default function InteractiveEye() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  return (
    <section className="interactive-eye-section">
      <div className="container">
        <div className="interactive-eye-header">
          <h2 className="section-title text-white">Explore Our Specialities</h2>
          <Link href="#treatments" className="view-all-link">VIEW ALL SPECIALITIES &rsaquo;</Link>
        </div>

        <div className="eye-map-container">
          {/* Realistic Eye Graphic */}
          <div className="eye-svg-wrapper">
             <img src="/images/eye-realistic.png" alt="Eye Anatomy" className="eye-graphic" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          </div>

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div 
              key={spot.id} 
              className={`hotspot-wrapper ${activeSpot === spot.id ? 'active' : ''} align-${spot.align}`}
              style={{ 
                left: `${spot.x}%`, 
                top: `${spot.y}%`, 
                transform: spot.x < 50 ? 'translate(-100%, -50%)' : spot.x > 50 ? 'translate(0%, -50%)' : 'translate(-50%, 0%)',
                cursor: 'pointer' 
              }}
              onMouseEnter={() => setActiveSpot(spot.id)}
              onMouseLeave={() => setActiveSpot(null)}
              onClick={() => setActiveSpot(spot.id === activeSpot ? null : spot.id)}
            >
              <div className="dashed-pill">{spot.label}</div>
              
              <div className="hotspot-popover">
                <div className="popover-icon">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                     <circle cx="12" cy="12" r="3"></circle>
                   </svg>
                </div>
                <h3>{spot.title}</h3>
                <p>{spot.description}</p>
                <Link href={spot.link} className="popover-btn">
                  <span>View More</span>
                  <div className="arrow-circle">&rsaquo;</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
