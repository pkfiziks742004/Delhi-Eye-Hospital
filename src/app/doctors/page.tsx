import Link from 'next/link';
import { hospitalData } from '@/data/hospital';
import '../home.css';

export const metadata = {
  title: `Our Doctors | ${hospitalData.hospitalName}`,
  description: `Meet the expert eye specialists at ${hospitalData.hospitalName}.`,
};

export default function DoctorsPage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: '#f0f7f4', minHeight: '100vh' }}>
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '4rem' }}>Our Specialists</h1>
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

                    <div style={{ marginTop: '1.2rem' }}>
                      <Link href={`/doctors/${doctor.id}`} className="doctor-profile-btn">
                        View Profile <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
