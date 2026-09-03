import Link from 'next/link';
import { hospitalData } from '@/data/hospital';
import "./home.css";
import InteractiveEye from '@/components/InteractiveEye';
import TechCarousel from '@/components/TechCarousel';
import HeroSlideshow from '@/components/HeroSlideshow';
import RealTransformations from '@/components/RealTransformations';
import VisionBanner from '@/components/VisionBanner';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Max Style) */}
      <section className="hero max-style-hero">
        <HeroSlideshow
          images={[
            "/images/bulding.png",
            "/images/unnamed (4).webp",
            "/images/unnamed.webp",
            "/images/unnamed (1).webp",
            "/images/unnamed (3).webp",
          ]}
          interval={5000}
        />
        <div className="hero-overlay"></div>
        <div className="container hero-container-max">
          <div className="hero-content-max">
            <h1 className="hero-headline animate-fade-up">{hospitalData.tagline}</h1>
            <p className="hero-supporting-text animate-fade-up delay-1">
              Experience advanced ophthalmic care backed by expert surgeons, modern technology, and personalized treatment designed to protect and improve your vision.
            </p>
            <div className="hero-actions animate-fade-up delay-2">
              <Link href="?modal=book-appointment" className="btn btn-orange">
                Book an Appointment
              </Link>
              <a href={`tel:${hospitalData.phone}`} className="btn btn-secondary" style={{ backgroundColor: 'white' }}>
                Call the Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Action Bar (Overlapping) */}
      <div className="quick-action-wrapper">
        <div className="container">
          <div className="quick-action-card animate-fade-up delay-3">
            <Link href="?modal=book-appointment" className="action-item-max">
              <span className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <span>Book Appointment</span>
            </Link>
            <a href={`tel:${hospitalData.phone}`} className="action-item-max">
              <span className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span>Call Hospital</span>
            </a>
            <Link href="/patient-information" className="action-item-max">
              <span className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </span>
              <span>Patient Info</span>
            </Link>
            <a href={hospitalData.googleMapsUrl} target="_blank" rel="noreferrer" className="action-item-max">
              <span className="action-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span>Find Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Scale & Trust Stats Cards */}
      <section className="stats-banner">
        <div className="container grid grid-cols-4" style={{ gap: '1.5rem' }}>
          <div className="stat-card stat-orange">
            <div className="stat-icon">🏥</div>
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Bed Capacity</p>
          </div>
          <div className="stat-card stat-blue">
            <div className="stat-icon">👨‍⚕️</div>
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Specialist Doctors</p>
          </div>
          <div className="stat-card stat-purple">
            <div className="stat-icon">🔬</div>
            <h3 className="stat-number">1,00,000+</h3>
            <p className="stat-label">Surgeries Performed</p>
          </div>
          <div className="stat-card stat-green">
            <div className="stat-icon">🏆</div>
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Years of Trust</p>
          </div>
        </div>
      </section>

      {/* 4. About Section (Editorial Layout) */}
      <section className="section">
        <div className="container about-editorial-grid">
          <div className="about-editorial-images">
             <img src="/images/doctor 1.webp" alt="Chief Surgeon" className="img-layer-1" />
             <img src="/images/unnamed (13).webp" alt="Hospital Facility" className="img-layer-2" />
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem', letterSpacing: '-1px' }}>
              Redefining Ophthalmic Excellence
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              At {hospitalData.hospitalName}, we do not just treat eyes; we protect legacies. By converging world-class surgical expertise with next-generation medical technology, we have cultivated an environment where clinical precision meets profound human empathy.
            </p>
            <ul className="trust-points">
              <li><span style={{ color: 'var(--brand-orange)' }}>✦</span> Uncompromising Safety Standards</li>
              <li><span style={{ color: 'var(--brand-orange)' }}>✦</span> Master-Class Surgeons</li>
              <li><span style={{ color: 'var(--brand-orange)' }}>✦</span> Bespoke Patient Journeys</li>
              <li><span style={{ color: 'var(--brand-orange)' }}>✦</span> Ultra-Precision Diagnostics</li>
            </ul>
            <Link href="/about" className="btn btn-primary" style={{ marginTop: '2rem', padding: '1rem 2rem' }}>
              Discover Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Premium Care Section */}
      <section className="premium-care-section">
        <div className="container premium-care-container">
          <div className="premium-care-content">
             <div className="premium-badge">WORLD-CLASS EYE CARE</div>
             <h2 className="premium-title">Setting the Standard for <br/><span>Ophthalmic Excellence</span></h2>
             <p className="premium-description">
               Experience the zenith of medical expertise in a state-of-the-art facility. Our internationally trained specialists combine compassionate care with cutting-edge technology to deliver outcomes that truly change lives.
             </p>
             <ul className="premium-features">
               <li>
                 <span className="premium-check">✓</span>
                 <div>
                   <strong>Comprehensive Diagnostics</strong>
                   <span>Precision testing for accurate detection</span>
                 </div>
               </li>
               <li>
                 <span className="premium-check">✓</span>
                 <div>
                   <strong>Pediatric Eye Care</strong>
                   <span>Gentle, specialized treatment for children</span>
                 </div>
               </li>
               <li>
                 <span className="premium-check">✓</span>
                 <div>
                   <strong>Expert Surgical Team</strong>
                   <span>Decades of combined surgical experience</span>
                 </div>
               </li>
             </ul>
          </div>
          <div className="premium-care-images">
            <div className="premium-img-main">
              <img src="/images/premium_team.jpg" alt="Expert Eye Care Team" />
            </div>
            <div className="premium-img-overlay">
              <img src="/images/premium_pediatric.jpg" alt="Pediatric Eye Care" />
              <div className="premium-stat-box">
                <span className="stat-value">99%</span>
                <span className="stat-text">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Treatments Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Treatments & Services</h2>
          <div className="grid grid-cols-3">
            {hospitalData.services.map((service) => (
              <div key={service.id} className="card service-card">
                <div className="service-icon-wrapper" style={{ marginBottom: '1.5rem', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', background: 'var(--accent-color)' }}>
                  <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link href={`/treatments/${service.id}`} className="service-link">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Interactive Specialities Eye Map */}
      <InteractiveEye />

      {/* 8. Vision Feature Banner (See the World Clearly, Live Better) */}
      <VisionBanner />

      {/* 9. Doctors Section */}
      <section className="section" style={{ backgroundColor: '#f0f7f4' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>Meet Our Specialists</h2>
          <div>
            {hospitalData.doctors.map((doctor, index) => {
              const isReverse = index % 2 !== 0;
              return (
                <div key={doctor.id} className={`premium-doctor-card ${isReverse ? 'reverse' : ''}`}>
                  {/* Image side */}
                  <div className="doctor-image-container" style={{ order: isReverse ? 2 : 1 }}>
                    <img src={doctor.image} alt={doctor.name} />
                    <div className="doctor-exp-badge">
                      🏆 {doctor.experience}
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <div className="doctor-content-container" style={{ order: isReverse ? 1 : 2 }}>
                    <div className="doctor-subtitle-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v8"/><path d="M16 10h6.6"/><path d="M19.6 13.6L22 16"/><path d="M19.6 6.4L22 4"/><circle cx="16" cy="10" r="1"/></svg>
                      BEST OPHTHALMOLOGIST IN DELHI
                    </div>
                    <h3 className="doctor-title">{doctor.name}</h3>
                    <p className="doctor-bio" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {doctor.bio.replace('[DOCTOR_1_ADDITIONAL_BIO_PLACEHOLDER]', '').replace('[DOCTOR_2_ADDITIONAL_BIO_PLACEHOLDER]', '')}
                    </p>
                    
                    <div className="doctor-tags-row">
                      <span className="doctor-tag">{doctor.qualification}</span>
                      <span className="doctor-tag">15,000+ Patients</span>
                      {doctor.areasOfExpertise.slice(0, 1).map((exp, i) => (
                        <span key={i} className="doctor-tag">{exp}</span>
                      ))}
                      <span className="doctor-tag">4.9★ Rated</span>
                    </div>

                    <Link href={`/doctors/${doctor.id}`} className="doctor-profile-btn">
                      Read Full Profile <span>&gt;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Technological Advancements Section (Max Style) */}
      <section className="tech-section">
        <div className="container tech-container grid grid-cols-2">
          <div className="tech-illustration-wrapper">
            <h2 className="tech-title">
              Our <span>Technological</span> Advancements
            </h2>
            <p className="tech-subtitle">
              We leverage state-of-the-art diagnostic and surgical equipment to deliver unparalleled precision, safety, and results for your vision.
            </p>
          </div>
          <div className="tech-cards-wrapper">
            <TechCarousel technologies={hospitalData.technologies} />
          </div>
        </div>
      </section>

      {/* 10. Real Transformations (Before & After) */}
      <RealTransformations />

      {/* 11. Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Patients Choose {hospitalData.hospitalName}</h2>
          <div className="grid grid-cols-3 why-choose-grid">
            <div className="card why-card">
              <div className="why-icon">👨‍⚕️</div>
              <h3>Experienced Eye Specialists</h3>
              <p>Highly qualified doctors dedicated to preserving and restoring your vision.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">👁️</div>
              <h3>Comprehensive Eye Care</h3>
              <p>Complete range of eye care services under one roof.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🔬</div>
              <h3>Advanced Diagnostic Technology</h3>
              <p>Precision equipment for accurate diagnosis and monitoring.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">📋</div>
              <h3>Personalised Treatment Plans</h3>
              <p>Customized care tailored to your specific eye health needs.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🤝</div>
              <h3>Patient-Friendly Approach</h3>
              <p>Compassionate care in a welcoming and comfortable environment.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">🗓️</div>
              <h3>Convenient Appointment Support</h3>
              <p>Easy booking process with minimal waiting times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Patient Journey */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Your Journey With Us</h2>
          <div className="journey-timeline">
            <div className="journey-step">
              <div className="step-number">1</div>
              <h3>Book Your Appointment</h3>
              <p>Schedule your visit online or by phone.</p>
            </div>
            <div className="journey-step">
              <div className="step-number">2</div>
              <h3>Comprehensive Examination</h3>
              <p>Detailed evaluation of your eye health.</p>
            </div>
            <div className="journey-step">
              <div className="step-number">3</div>
              <h3>Doctor Consultation</h3>
              <p>Expert discussion of your diagnosis.</p>
            </div>
            <div className="journey-step">
              <div className="step-number">4</div>
              <h3>Personalised Treatment</h3>
              <p>Tailored care plan for optimal vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Contact Section */}
      <section className="section section-alt contact-section">
        <div className="container grid grid-cols-2">
          <div className="contact-info-panel">
            <h2>Contact {hospitalData.hospitalName}</h2>
            <div className="contact-details">
              <p><strong>Address:</strong><br/>{hospitalData.address}</p>
              <p><strong>Opening Hours:</strong><br/>{hospitalData.openingHours}</p>
              <p><strong>Phone:</strong> <a href={`tel:${hospitalData.phone}`}>{hospitalData.phone}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${hospitalData.whatsapp.replace(/[^0-9]/g, '')}`}>{hospitalData.whatsapp}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${hospitalData.email}`}>{hospitalData.email}</a></p>
            </div>
            <Link href="?modal=book-appointment" className="btn btn-primary" style={{marginTop: '2rem'}}>
              Book Appointment
            </Link>
          </div>
          <div className="contact-map">
            <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
              <img src="/images/bulding.png" alt="Delhi Eye Hospital" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '300px' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)' }}>
                <a href={hospitalData.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                  📍 Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
