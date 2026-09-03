import Link from 'next/link';
import { hospitalData } from '@/data/hospital';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ marginBottom: '1.5rem' }}>
              <img 
                src="/images/logo.png" 
                alt={`${hospitalData.hospitalName} Logo`} 
                style={{ maxHeight: '80px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            <p className="footer-desc">{hospitalData.description}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
               {/* Social placeholders */}
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>f</a>
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>in</a>
               <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>x</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about">About {hospitalData.hospitalName}</Link></li>
              <li><Link href="/doctors">Our Doctors</Link></li>
              <li><Link href="/facilities">Facilities & Tech</Link></li>
              <li><Link href="/patient-information">Patient Guidelines</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Centers of Excellence</h4>
            <ul className="footer-links">
              {hospitalData.services.slice(0, 5).map(service => (
                <li key={service.id}><Link href={`/treatments/${service.id}`}>{service.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">24/7 Emergency & Contact</h4>
            <ul className="footer-contact">
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span> 
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--brand-orange)', textTransform: 'uppercase', letterSpacing: '1px' }}>Emergency Helpline</span>
                  <a href={`tel:${hospitalData.phone}`} style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{hospitalData.phone}</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</span>
                  {hospitalData.address}
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</span>
                  <a href={`mailto:${hospitalData.email}`}>{hospitalData.email}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-main">
            <p>&copy; {new Date().getFullYear()} {hospitalData.hospitalName}. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms of Service</Link>
            </div>
          </div>

          <div className="footer-credit">
            <p className="credit-text">
              Designed &amp; Developed By — <a href="https://pluscode.in/" target="_blank" rel="noopener noreferrer" className="credit-link">PlusCode</a>
            </p>
            <a 
              href="https://pluscode.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="credit-badge"
              aria-label="PlusCode - We Design, We Develop, We Deliver"
            >
              <img 
                src="/images/pluscode-logo.svg" 
                alt="PlusCode Logo" 
                className="credit-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
