import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hospitalData } from '@/data/hospital';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const service = hospitalData.services.find((s) => s.id === resolvedParams.id);
  
  if (!service) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${service.name} | ${hospitalData.hospitalName}`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return hospitalData.services.map((service) => ({
    id: service.id,
  }));
}

export default async function TreatmentPage({ params }: Props) {
  const resolvedParams = await params;
  const service = hospitalData.services.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Treatment Hero */}
      <section className="section section-alt" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.name}</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{service.description}</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="?modal=book-appointment" className="btn btn-primary">
                  Consult a Specialist
                </Link>
                <a href={`tel:${hospitalData.phone}`} className="btn btn-secondary">
                  Call Us
                </a>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '4px solid #2e9650', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/images/unnamed (5).webp" alt={service.name} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Understanding {service.name}</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            At {hospitalData.hospitalName}, we offer comprehensive {service.name.toLowerCase()} using the latest technology and evidence-based medical practices. Our experienced specialists work closely with you to understand your condition and provide a personalized treatment plan.
          </p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>When to Consult an Eye Specialist?</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            If you are experiencing any changes in your vision, discomfort, or have a family history of eye conditions, it is important to get a comprehensive eye evaluation. Early diagnosis and treatment are key to preserving your vision.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            <li>Blurry or hazy vision</li>
            <li>Difficulty seeing at night</li>
            <li>Increased sensitivity to glare</li>
            <li>Frequent changes in eyeglass prescription</li>
            <li>Any physical discomfort or pain in the eye</li>
          </ul>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Approach to Treatment</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We begin with a thorough diagnostic evaluation using advanced equipment. Based on the results, our doctors will discuss all available medical, laser, or surgical options with you. We prioritize transparent guidance and patient comfort throughout the treatment journey.
          </p>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--background-alt)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Need more information?</h3>
            <p style={{ marginBottom: '1.5rem' }}>Our team is ready to answer your questions and guide you.</p>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
