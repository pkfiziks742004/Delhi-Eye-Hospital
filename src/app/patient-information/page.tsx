import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Patient Information | ${hospitalData.hospitalName}`,
  description: `Important information for patients visiting ${hospitalData.hospitalName}.`,
};

export default function PatientInformationPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title">Patient Information</h1>
          
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Appointment Process</h3>
            <p>
              We recommend booking your appointment in advance to minimize waiting times. 
              Upon arrival, our reception staff will guide you through the registration process. 
              A comprehensive eye examination involves multiple steps, including vision testing, dilation (if required), and consultation with the specialist.
            </p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>What to Bring</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Any previous medical records and eye prescriptions</li>
              <li>Your current spectacles or contact lenses</li>
              <li>A list of your current medications, including eye drops</li>
              <li>Valid ID proof</li>
              <li>Insurance card (if applicable)</li>
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Important Notes for Your Visit</h3>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Dilation:</strong> Your doctor may need to dilate your pupils for a detailed retinal examination. Dilation drops take about 20-30 minutes to act, and the effect can last for a few hours. 
              You may experience blurred vision and light sensitivity during this time. We strongly advise you not to drive immediately after the examination and to arrange for someone to accompany you.
            </p>
            <p>
              <strong>Contact Lenses:</strong> If you are visiting for a refractive surgery evaluation or contact lens fitting, please stop wearing your contact lenses for a few days before your appointment, as advised by our staff.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
