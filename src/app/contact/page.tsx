import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Contact Us | ${hospitalData.hospitalName}`,
  description: `Get in touch with ${hospitalData.hospitalName}. Find our location, phone number, and appointment booking details.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ background: 'var(--background-alt)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We're here to help you achieve the best vision possible. Reach out to our dedicated team of experts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Image Side */}
            <div>
              <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', background: 'linear-gradient(135deg, #e3f2fd 0%, #f0f7f4 100%)' }}>
                <img src="/images/contact_team.jpg" alt="Our Dedicated Team" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--primary-color)' }}>Dedicated to Care</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="card" style={{ marginBottom: '2rem', padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Hospital Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>📍</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Address</strong>
                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{hospitalData.address}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>📞</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Phone</strong>
                      <p style={{ margin: 0 }}><a href={`tel:${hospitalData.phone}`} style={{ color: 'var(--brand-orange)', fontWeight: '600' }}>{hospitalData.phone}</a></p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>💬</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>WhatsApp</strong>
                      <p style={{ margin: 0 }}><a href={`https://wa.me/${hospitalData.whatsapp.replace(/[^0-9]/g, '')}`} style={{ color: 'var(--success)', fontWeight: '600' }}>{hospitalData.whatsapp}</a></p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>✉️</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Email</strong>
                      <p style={{ margin: 0 }}><a href={`mailto:${hospitalData.email}`} style={{ color: 'var(--primary-color)' }}>{hospitalData.email}</a></p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>🕒</span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Opening Hours</strong>
                      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{hospitalData.openingHours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card" style={{ background: 'var(--danger)', color: 'white', padding: '2rem', border: 'none' }}>
                <h3 style={{ marginBottom: '1rem', color: 'white' }}>Emergency Contact</h3>
                <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>In case of an eye emergency, please call the hospital directly for immediate assistance.</p>
                <a href={`tel:${hospitalData.phone}`} className="btn" style={{ width: '100%', background: 'white', color: 'var(--danger)', fontWeight: 'bold' }}>
                  Call Emergency Number
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ width: '100%', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
            <img src="/images/bulding.png" alt="Hospital Location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <a href={hospitalData.googleMapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', boxShadow: 'var(--shadow-lg)' }}>
                 📍 Get Directions on Google Maps
               </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
