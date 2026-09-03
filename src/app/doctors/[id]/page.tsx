import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hospitalData } from '@/data/hospital';
import DoctorTimeline from '@/components/DoctorTimeline';
import '../doctor.css'; // Import the new styles 

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const doctor = hospitalData.doctors.find((d) => d.id === resolvedParams.id);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: `${doctor.name} | ${hospitalData.hospitalName}`,
    description: doctor.bio,
  };
}

export async function generateStaticParams() {
  return hospitalData.doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

// Simple SVG Icons
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const MicroscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
);

export default async function DoctorProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const doctor = hospitalData.doctors.find((d) => d.id === resolvedParams.id);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="doctor-hero">
        <div className="container">
          <div className="doctor-hero-content">
            <div className="hero-badge">
              <StarIcon /> Our Specialist
            </div>
            <h1>About {doctor.name} — {doctor.specialization}</h1>
            <p>One of the most trusted eye specialists with {doctor.experience} of expertise.</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="container bio-grid">
          <div>
            <div className="bio-subtitle">Best Ophthalmologist</div>
            <h2 className="bio-title">Ophthalmic Care with Compassion</h2>
            <div className="bio-text">
              Experience excellence in eye care with {doctor.name}. Known for their compassionate approach and unparalleled expertise, they provide personalized care to patients dealing with a range of complex ocular conditions.
              <br/><br/>
              {doctor.bio}
            </div>
            
            <div className="bio-stats-grid">
              <div className="bio-stat-pill">
                <BrainIcon />
                <span>{doctor.experience} Experience</span>
              </div>
              <div className="bio-stat-pill">
                <UserIcon />
                <span>10,000+ Patients</span>
              </div>
              <div className="bio-stat-pill">
                <BookIcon />
                <span>Expert Diagnosis</span>
              </div>
              <div className="bio-stat-pill">
                <HeartIcon />
                <span>Compassionate Care</span>
              </div>
            </div>
          </div>
          
          <div className="bio-image-wrapper">
            <img src={doctor.image} alt={doctor.name} />
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="credentials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Credentials</div>
            <h2>Qualifications & Expertise</h2>
            <p className="section-desc">A strong academic foundation backed by years of clinical excellence.</p>
          </div>
          
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="credential-icon">
                <BookIcon />
              </div>
              <h3>{doctor.qualification.split(',')[0] || "MBBS"}</h3>
              <p>Trained at reputed Indian medical institutions.</p>
            </div>
            
            <div className="credential-card">
              <div className="credential-icon">
                <BrainIcon />
              </div>
              <h3>{doctor.qualification.split(',')[1] || "Specialist"}</h3>
              <p>Specialist in advanced ophthalmic disorders and treatments.</p>
            </div>
            
            <div className="credential-card">
              <div className="credential-icon">
                <CheckCircleIcon />
              </div>
              <h3>Board Certified</h3>
              <p>Recognized specialist with {doctor.experience} experience.</p>
            </div>
            
            <div className="credential-card">
              <div className="credential-icon">
                <BookIcon />
              </div>
              <h3>Continuous Learning</h3>
              <p>Active in ophthalmology conferences and research updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Our Approach</div>
            <h2>The Care Philosophy</h2>
            <p className="section-desc">Four principles that guide every consultation and treatment.</p>
          </div>
          
          <div className="credentials-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <HeartIcon />
              </div>
              <h3>Compassion First</h3>
              <p>Every patient is treated with empathy and dignity.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <ShieldIcon />
              </div>
              <h3>Evidence-Based Care</h3>
              <p>Treatments grounded in the latest medical research.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <MicroscopeIcon />
              </div>
              <h3>Precision Diagnosis</h3>
              <p>Modern diagnostic tools for highly accurate outcomes.</p>
            </div>
            
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <UserIcon />
              </div>
              <h3>Personalized Plans</h3>
              <p>Treatments perfectly tailored to your unique condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="trust-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Trust & Authority</div>
            <h2>Verified Credentials You Can Rely On</h2>
          </div>
          
          <div className="credentials-grid">
            <div className="trust-card">
              <div className="trust-icon">
                <CheckCircleIcon />
              </div>
              <div className="trust-eyebrow">Medical Council Registered</div>
              <h3>Verified Registration</h3>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <StarIcon />
              </div>
              <div className="trust-eyebrow">Patient Rating</div>
              <h3>4.9 / 5 (500+ reviews)</h3>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <TrophyIcon />
              </div>
              <div className="trust-eyebrow">Recognition</div>
              <h3>Top Specialist</h3>
            </div>
            
            <div className="trust-card">
              <div className="trust-icon">
                <CalendarIcon />
              </div>
              <div className="trust-eyebrow">Practising Since</div>
              <h3>{doctor.experience} in medicine</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Timeline */}
      <DoctorTimeline
        doctorName={doctor.name}
        experience={doctor.experience}
        items={[
          { year: '2009', title: 'MBBS Completed', desc: 'Foundation in general medicine and clinical practice.' },
          { year: '2013', title: 'Specialization', desc: 'Advanced training in ophthalmic medicine and surgeries.' },
          { year: '2016', title: 'Super-Specialization', desc: 'Intensive fellowship in advanced eye procedures and treatments.' },
          { year: '2017', title: 'Started Consulting', desc: 'Began independent ophthalmology practice.' },
          { year: '2020', title: '10,000+ Patients', desc: 'Milestone crossed for treated and followed-up patients.' },
          { year: '2026', title: `${doctor.experience} Experience`, desc: 'Recognised as one of the leading eye specialists.' },
        ]}
      />

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-container">
            <div className="quote-icon">"</div>
            <p className="quote-text">
              "Behind every patient is a story — my role is to listen carefully, diagnose precisely, and treat with both science and heart."
            </p>
            <div className="quote-author">
              <div className="quote-author-initials">
                {doctor.name.split(' ').map(n => n[0]).join('').replace('D', '').substring(0, 2).toUpperCase()}
              </div>
              <div className="quote-author-details">
                <div className="quote-author-name">{doctor.name}</div>
                <div className="quote-author-title">Senior Consultant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor CTA Section */}
      <section className="doctor-cta-section">
        <div className="container">
          <div className="doctor-cta-content">
            <h2 className="doctor-cta-title">Ready to Take the First Step?</h2>
            <p className="doctor-cta-desc">
              Book a consultation with {doctor.name} and experience eye care that puts you first.
            </p>
            <Link href="?modal=book-appointment" className="doctor-cta-btn">
              Book Appointment &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
