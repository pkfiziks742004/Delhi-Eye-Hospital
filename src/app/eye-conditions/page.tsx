import Link from 'next/link';
import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Eye Conditions | ${hospitalData.hospitalName}`,
  description: `Learn about the various eye conditions treated at ${hospitalData.hospitalName}.`,
};

export default function EyeConditionsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Eye Conditions We Treat</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Our specialists are experienced in diagnosing and managing a wide spectrum of eye conditions. 
            If you are experiencing any vision problems, we are here to help.
          </p>
          <div className="grid grid-cols-4">
            {hospitalData.eyeConditions.map((condition, index) => {
              const softColors = [
                '#f0f7f4', '#eef6ff', '#fff8e6', '#fdf2f8',
                '#f4f1fa', '#f0fdf4', '#fffbeb', '#f0f9ff'
              ];
              const bgColor = softColors[index % softColors.length];
              return (
                <div 
                  key={index} 
                  className="card" 
                  style={{ 
                    textAlign: 'center', 
                    padding: '2rem 1.5rem', 
                    backgroundColor: bgColor,
                    border: 'none',
                    minHeight: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--primary-color)', lineHeight: '1.4' }}>
                    {condition}
                  </h3>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="?modal=book-appointment" className="btn btn-primary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
