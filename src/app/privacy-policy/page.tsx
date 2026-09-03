import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Privacy Policy | ${hospitalData.hospitalName}`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title">Privacy Policy</h1>
          <div className="card">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
            <p>Welcome to {hospitalData.hospitalName}. We are committed to protecting your personal and medical information. This Privacy Policy outlines how we collect, use, and protect your data.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Information Collection</h3>
            <p>We may collect personal information such as your name, contact details, and medical history when you book an appointment, visit our facility, or interact with our website.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Use of Information</h3>
            <p>Your information is used solely for providing medical care, appointment scheduling, and internal record keeping. We do not sell or share your personal information with third parties for marketing purposes.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Data Security</h3>
            <p>We implement strict security measures to protect your medical records and personal data against unauthorized access or disclosure.</p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at {hospitalData.email}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
