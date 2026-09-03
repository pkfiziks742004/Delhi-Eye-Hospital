import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Facilities & Technology | ${hospitalData.hospitalName}`,
  description: `Explore the advanced facilities and diagnostic technology at ${hospitalData.hospitalName}.`,
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Facilities</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            {hospitalData.hospitalName} is equipped with modern infrastructure designed to provide a comfortable and safe environment for all our patients.
          </p>
          <div className="grid grid-cols-2">
            {hospitalData.facilities.map((facility, index) => {
              const imgSrc = `/images/${facility.name} Image.png`;
              return (
              <div key={index} className="card" style={{ padding: 0, overflow: 'hidden', border: 'none', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={imgSrc} alt={facility.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', backgroundColor: '#ffffff' }}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{facility.name}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{facility.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Advanced Diagnostics</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Accurate diagnosis is the foundation of effective treatment. Our hospital utilizes state-of-the-art diagnostic equipment for precise evaluation of eye health.
          </p>
          <div className="grid grid-cols-4">
            {hospitalData.diagnostics.map((diag, index) => {
              const imgSrc = `/images/${diag.name}.png`;
              return (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', border: 'none', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img src={imgSrc} alt={diag.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)', fontSize: '1.1rem' }}>{diag.name}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{diag.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
