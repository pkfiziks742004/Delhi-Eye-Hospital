import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Terms & Conditions | ${hospitalData.hospitalName}`,
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title">Terms & Conditions</h1>
          <div className="card">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h3>
            <p>By accessing this website and utilizing the services of {hospitalData.hospitalName}, you agree to abide by these Terms and Conditions.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Medical Disclaimer</h3>
            <p>The content provided on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Appointments</h3>
            <p>Appointment requests made through the website are subject to availability and confirmation by our staff.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting to the website.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Governing Law</h3>
            <p>These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Delhi.</p>
          </div>
        </div>
      </section>
    </>
  );
}
