import Link from 'next/link';
import { hospitalData } from '@/data/hospital';

export const metadata = {
  title: `Frequently Asked Questions | ${hospitalData.hospitalName}`,
  description: `Find answers to common questions about visiting ${hospitalData.hospitalName}.`,
};

export default function FAQPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title">Frequently Asked Questions</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {hospitalData.faqs.map((faq, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                  {faq.question}
                </h3>
                <p style={{ margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'var(--background-alt)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Still have questions?</h3>
            <p style={{ marginBottom: '1.5rem' }}>We are here to help. Contact our support team for more information.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href={`tel:${hospitalData.phone}`} className="btn btn-secondary">Call Us</a>
              <Link href="/contact" className="btn btn-primary">Contact Page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
