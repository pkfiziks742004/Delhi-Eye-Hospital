import Link from 'next/link';
import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Treatments & Services | ${hospitalData.hospitalName}`,
  description: `Explore the comprehensive eye care treatments and services offered at ${hospitalData.hospitalName}.`,
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Treatments & Services</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            We provide a wide range of advanced eye care services using state-of-the-art technology to ensure the best possible outcomes for our patients.
          </p>
          <div className="grid grid-cols-3">
            {hospitalData.services.map((service, index) => {
              const softColors = [
                '#f0f7f4', '#eef6ff', '#fff8e6', '#fdf2f8',
                '#f4f1fa', '#f0fdf4', '#fffbeb', '#f0f9ff'
              ];
              const bgColor = softColors[index % softColors.length];
              return (
              <div key={service.id} className="card service-card" style={{ display: 'flex', flexDirection: 'column', backgroundColor: bgColor, border: 'none' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2e9650" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{service.name}</h3>
                <p style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{service.description}</p>
                <Link href={`/treatments/${service.id}`} className="btn btn-secondary" style={{ width: '100%', backgroundColor: 'white', border: '1px solid var(--border-color)' }}>
                  Learn More
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
