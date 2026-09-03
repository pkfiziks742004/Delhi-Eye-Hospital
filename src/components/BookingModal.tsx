'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import './BookingModal.css';

function BookingModalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const isOpen = searchParams.get('modal') === 'book-appointment';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Restore to default stylesheet value
    }
  }, [isOpen]);

  const closeModal = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('modal');
    const newSearch = params.toString();
    const newUrl = `${pathname}${newSearch ? `?${newSearch}` : ''}`;
    router.replace(newUrl, { scroll: false });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-header">
          <h2>Book an Appointment</h2>
          <p>Please fill out the form below to schedule your visit.</p>
        </div>
        <form className="booking-form" onSubmit={(e) => {
          e.preventDefault();
          alert('Appointment request submitted successfully!');
          closeModal();
        }}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" required placeholder="+91 XXXXX XXXXX" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service/Department</label>
              <select id="service" required>
                <option value="">Select a service...</option>
                <option value="cataract">Cataract Surgery</option>
                <option value="lasik">LASIK / Refractive</option>
                <option value="glaucoma">Glaucoma Treatment</option>
                <option value="retina">Retina Care</option>
                <option value="general">General Checkup</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Notes (Optional)</label>
            <textarea id="message" rows={3} placeholder="Any specific symptoms or requests..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

export default function BookingModal() {
  return (
    <Suspense fallback={null}>
      <BookingModalContent />
    </Suspense>
  );
}
