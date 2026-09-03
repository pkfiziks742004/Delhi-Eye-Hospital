export interface AppointmentRequest {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  doctor: string;
  service: string;
  message: string;
}

export async function submitAppointment(data: AppointmentRequest): Promise<{ success: boolean; message: string }> {
  // This is a service layer abstraction for submitting appointments.
  // Currently, it simulates a backend API call using a timeout.
  // In the future, this can be connected to a real backend endpoint.
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Appointment request submitted:', data);
      resolve({ success: true, message: 'Appointment submitted successfully' });
    }, 1500);
  });
}
