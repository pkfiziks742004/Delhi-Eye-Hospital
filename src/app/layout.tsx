import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./header.css";
import "./footer.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/BookingModal";
import { hospitalData } from "@/data/hospital";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${hospitalData.hospitalName} | Advanced Eye Care & Eye Specialists`,
  description: hospitalData.description,
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/images/logo.png', type: 'image/png' }
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: `${hospitalData.hospitalName} | Advanced Eye Care`,
    description: hospitalData.description,
    url: "https://delhieyehospital.com",
    siteName: hospitalData.hospitalName,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": hospitalData.hospitalName,
    "description": hospitalData.description,
    "url": "https://delhieyehospital.com",
    "telephone": hospitalData.phone,
    "email": hospitalData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Tappal Rd",
      "addressLocality": "Jewar",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "203135",
      "addressCountry": "IN"
    },
    "openingHours": ["Mo-Sa 09:00-17:00", "Su 09:00-14:00"]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BookingModal />
      </body>
    </html>
  );
}
