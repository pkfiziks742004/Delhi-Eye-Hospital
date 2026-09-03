import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `About Us | ${hospitalData.hospitalName}`,
  description: `Learn more about ${hospitalData.hospitalName} and our commitment to advanced eye care.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section section-alt">
        <div className="container">
          <h1 className="section-title">About {hospitalData.hospitalName}</h1>
          <div className="grid grid-cols-2">
            <div>
              <p>
                {hospitalData.hospitalName} is dedicated to providing comprehensive and advanced eye care services. 
                Our mission is to deliver the highest quality of ophthalmic care with a patient-centred approach.
              </p>
              <p>
                With experienced specialists, modern diagnostic equipment, and advanced surgical facilities, 
                we ensure that every patient receives personalized and effective treatment for their eye conditions.
              </p>
              <h3 style={{marginTop: '2rem'}}>Our Mission</h3>
              <p>To protect, preserve, and restore vision through excellence in eye care.</p>
              
              <h3 style={{marginTop: '2rem'}}>Our Vision</h3>
              <p>To be the most trusted and advanced eye hospital in the region.</p>
            </div>
            <div>
              <img src="/images/bulding.png" alt="Delhi Eye Hospital Building" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', border: '4px solid #2e9650', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
