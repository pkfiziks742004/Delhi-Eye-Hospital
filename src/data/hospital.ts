export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  areasOfExpertise: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
}

export interface Diagnostic {
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HospitalData {
  hospitalName: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  googleMapsUrl: string;
  latitude: string;
  longitude: string;
  openingHours: string;
  doctors: Doctor[];
  services: Service[];
  facilities: Facility[];
  technologies: Technology[];
  eyeConditions: string[];
  diagnostics: Diagnostic[];
  faqs: FAQ[];
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

export const hospitalData: HospitalData = {
  hospitalName: "DELHI EYE HOSPITAL",
  tagline: "Vision Redefined. Precision Perfected.",
  description: "Experience the pinnacle of ophthalmic care. We combine world-class surgical expertise with cutting-edge medical technology to deliver unmatched clinical outcomes and personalized patient experiences.",
  address: "Main Tappal Rd, Jewar, Uttar Pradesh 203135",
  phone: "+91 98686 40969",
  whatsapp: "+91 98686 40969",
  email: "contact@delhieyehospital.com",
  googleMapsUrl: "https://share.google/A7sN6j3Hp8Q1heYJU",
  latitude: "28.1131321",
  longitude: "77.5572369",
  openingHours: "Mon-Sat: 9:00 AM - 5:00 PM, Sun: 9:00 AM - 2:00 PM",
  
  doctors: [
    {
      id: "doctor-1",
      name: "Dr. Vikram Sharma",
      qualification: "MBBS, MS (Ophthalmology)",
      specialization: "Senior Eye Surgeon & Visionary Leader",
      experience: "15+ Years",
      bio: "With over 15+ years of dedicated clinical experience, they are recognized as a pioneer in advanced ophthalmic procedures. They have successfully treated thousands of patients, bringing unparalleled expertise and a compassionate approach to eye care. Their commitment to utilizing state-of-the-art technology ensures the highest standard of precision and safety for every procedure.",
      image: "/images/doctor 1.webp",
      areasOfExpertise: [
        "Cataract Specialist",
        "Laser Refractive Mastery",
        "Complex Anterior Segment Reconstruction"
      ]
    },
    {
      id: "doctor-2",
      name: "Dr. Arvind Gupta",
      qualification: "MBBS, DNB (Ophthalmology)",
      specialization: "Consultant Specialist in Precision Ophthalmology",
      experience: "10+ Years",
      bio: "A highly distinguished specialist with over 10+ years of experience in diagnosing and treating complex ocular conditions. Known for their meticulous attention to detail and patient-first philosophy, they have built a reputation for excellence in specialized eye care. They continuously stay at the forefront of medical advancements to provide world-class treatments.",
      image: "/images/doctor 2.webp",
      areasOfExpertise: [
        "Glaucoma Specialist",
        "Medical Retina & Macular Therapies",
        "Pediatric Vision Correction"
      ]
    }
  ],

  services: [
    {
      id: "cataract-care",
      name: "Advanced Cataract Surgery",
      description: "Restoring brilliant clarity with blade-free, micro-incision phacoemulsification and premium Toric/Multifocal IOL implants.",
      image: "/images/unnamed (1).webp",
      icon: "cataract"
    },
    {
      id: "glaucoma-care",
      name: "Glaucoma Management",
      description: "Protecting your visual legacy through early detection algorithms and elite surgical interventions to halt nerve damage.",
      image: "/images/unnamed (2).webp",
      icon: "glaucoma"
    },
    {
      id: "retina-care",
      name: "Retinal Therapies",
      description: "State-of-the-art diagnostic imaging and targeted treatments for diabetic retinopathy and age-related macular degeneration.",
      image: "/images/unnamed (3).webp",
      icon: "retina"
    },
    {
      id: "cornea-care",
      name: "Corneal Specialists",
      description: "Pioneering treatments for severe dry eye, corneal infections, and advanced surface reconstruction.",
      image: "/images/unnamed (4).webp",
      icon: "cornea"
    },
    {
      id: "refractive-care",
      name: "Laser Vision Correction",
      description: "Experience the freedom of flawless 20/20 vision with ultra-precise, customized laser refractive procedures.",
      image: "/images/unnamed (5).webp",
      icon: "lasik"
    },
    {
      id: "comprehensive-eye-care",
      name: "Executive Eye Evaluation",
      description: "A meticulously thorough, computer-assisted visual assessment designed for all ages, identifying issues before they emerge.",
      image: "/images/unnamed (6).webp",
      icon: "exam"
    }
  ],

  technologies: [
    {
      id: "tech-1",
      name: "Zeiss VisuMax Femtosecond Laser",
      description: "The pinnacle of refractive surgery technology, offering minimally invasive, blade-free SMILE and LASIK procedures with sub-micron precision for flawless vision correction."
    },
    {
      id: "tech-2",
      name: "Alcon Centurion® Vision System",
      description: "An advanced phacoemulsification system that dynamically optimizes every moment of cataract surgery, ensuring unparalleled safety, stability, and rapid patient recovery."
    },
    {
      id: "tech-3",
      name: "Heidelberg SPECTRALIS® OCT",
      description: "A premium diagnostic imaging platform providing ultra-high-resolution, 3D cross-sectional images of the retina for early detection of glaucoma and macular diseases."
    },
    {
      id: "tech-4",
      name: "Constellation® Vision System",
      description: "The gold standard in vitreoretinal surgery, offering high-speed cutting and precise fluidics control for complex posterior segment procedures."
    }
  ],

  eyeConditions: [
    "Cataract",
    "Glaucoma",
    "Diabetic Retinopathy",
    "Dry Eye Syndrome",
    "Refractive Errors (Myopia, Hyperopia, Astigmatism)",
    "Corneal Conditions",
    "Macular Degeneration",
    "Children's Eye Problems"
  ],

  facilities: [
    {
      name: "Modern Consultation Rooms",
      description: "Comfortable and fully equipped consultation suites.",
      image: "/images/unnamed (8).webp"
    },
    {
      name: "Advanced Diagnostic Centre",
      description: "State-of-the-art eye testing and diagnostic equipment.",
      image: "/images/unnamed (9).webp"
    },
    {
      name: "Modular Operation Theatre",
      description: "Highly sterile and advanced OT for eye surgeries.",
      image: "/images/unnamed (10).webp"
    },
    {
      name: "Optical Dispensary",
      description: "Wide range of premium spectacles and contact lenses.",
      image: "/images/unnamed (11).webp"
    }
  ],

  diagnostics: [
    {
      name: "OCT (Optical Coherence Tomography)",
      description: "High-resolution imaging of the retina and optic nerve.",
      image: "/images/unnamed (12).webp"
    },
    {
      name: "Visual Field Analyzer",
      description: "Advanced perimetry for glaucoma evaluation.",
      image: "/images/unnamed (13).webp"
    },
    {
      name: "Corneal Topography",
      description: "Detailed mapping of the corneal surface.",
      image: "/images/unnamed (14).webp"
    },
    {
      name: "A-Scan & B-Scan Ultrasound",
      description: "Ocular biometry and posterior segment evaluation.",
      image: "/images/unnamed (15).webp"
    }
  ],

  faqs: [
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us, sending a WhatsApp message, or using the online appointment form on our website."
    },
    {
      question: "How long does a comprehensive eye consultation take?",
      answer: "A complete eye examination usually takes between 30 to 45 minutes, depending on whether your eyes need to be dilated."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring your previous medical records, current spectacles, and a list of any medications you are currently taking."
    },
    {
      question: "Do I need to book before visiting?",
      answer: "While we do accept walk-in patients, we highly recommend booking an appointment in advance to reduce waiting time."
    }
  ],
  
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  }
};
