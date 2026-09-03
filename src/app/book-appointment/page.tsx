'use client';

import { useState } from 'react';
import { hospitalData } from '@/data/hospital';
import { submitAppointment, AppointmentRequest } from '@/services/appointmentService';

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState<AppointmentRequest>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await submitAppointment(formData);
      if (response.success) {
        setStatus('success');
        setFormData({
          name: '', phone: '', email: '', date: '', time: '', doctor: '', service: '', message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title">Book an Appointment</h1>
          <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Request an appointment online and our team will get back to you to confirm your booking.
          </p>

          <div className="card">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '4rem', color: 'var(--success)', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ marginBottom: '1rem' }}>Appointment Request Received</h3>
                <p style={{ marginBottom: '2rem' }}>Thank you for choosing {hospitalData.hospitalName}. Our team will contact you shortly to confirm your appointment date and time.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>Book Another Appointment</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontWeight: '600' }}>Patient Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="phone" style={{ fontWeight: '600' }}>Mobile Number *</label>
                    <input type="tel" id="phone" name="phone" required pattern="[0-9]{10,15}" title="Please enter a valid phone number" value={formData.phone} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontWeight: '600' }}>Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="date" style={{ fontWeight: '600' }}>Preferred Date *</label>
                    <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="doctor" style={{ fontWeight: '600' }}>Select Doctor</label>
                    <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'white' }}>
                      <option value="">No preference</option>
                      {hospitalData.doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="service" style={{ fontWeight: '600' }}>Select Service / Reason</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'white' }}>
                      <option value="">General Checkup</option>
                      {hospitalData.services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontWeight: '600' }}>Additional Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ padding: '1rem', fontSize: '1.1rem' }}>
                  {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
                </button>
              </form>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Call Us Directly</h4>
              <a href={`tel:${hospitalData.phone}`} className="btn btn-secondary">📞 {hospitalData.phone}</a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>WhatsApp Us</h4>
              <a href={`https://wa.me/${hospitalData.whatsapp.replace(/[^0-9]/g, '')}`} className="btn btn-secondary" style={{ borderColor: '#25D366', color: '#25D366' }}>💬 {hospitalData.whatsapp}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
