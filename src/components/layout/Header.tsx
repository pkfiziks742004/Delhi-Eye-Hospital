'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { hospitalData } from '@/data/hospital';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Conditions', href: '/eye-conditions' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Patient Info', href: '/patient-information' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Utility Bar (Max Style) */}
      <div className="top-utility-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left" style={{ width: '100%', textAlign: 'center' }}>
            <span>🕒 Monday to Saturday <strong>10:00 AM to 3:00 PM</strong> & <strong>5:00 PM to 7:00 PM</strong> / Sunday <strong>10:00 AM to 3:00 PM</strong> / Thursday <strong>Clinic Off</strong></span>
          </div>
        </div>
      </div>

      <div className="container header-container">
        <div className="logo-container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logo.png" 
              alt={`${hospitalData.hospitalName} Logo`} 
              style={{ maxHeight: '65px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.name}>
                  <Link href={link.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions desktop-actions">
          <Link href="?modal=book-appointment" className="btn btn-orange">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mobile-nav-actions">
          <a href={`tel:${hospitalData.phone}`} className="btn btn-secondary" style={{width: '100%', marginBottom: '1rem'}}>
            Call Now
          </a>
          <Link href="?modal=book-appointment" className="btn btn-primary" style={{width: '100%'}} onClick={() => setIsMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
