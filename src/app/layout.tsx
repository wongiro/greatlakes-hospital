import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define Metadata
export const metadata: Metadata = {
  title: "Great Lakes International Hospital | Healthcare Excellence",
  description:
    "Great Lakes International Hospital provides world-class healthcare services with compassion, advanced technology, and skilled medical professionals in Fort Portal, Uganda.",
  keywords: "hospital, healthcare, medical services, Fort Portal, Uganda, international hospital, patient care, advanced technology",
  authors: [{ name: 'Great Lakes International Hospital' }],
  robots: "index, follow",
  openGraph: {
    title: "Great Lakes International Hospital",
    description:
      "World-class healthcare services with compassion and advanced technology.",
    url: "https://www.greatlakeshospital.com",
    type: "website",
    images: [
      {
        url: "https://www.greatlakeshospital.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Great Lakes International Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Lakes International Hospital",
    description:
      "Providing world-class healthcare services in Fort Portal, Uganda.",
    images: "https://www.greatlakeshospital.com/images/twitter-card.jpg",
    site: "@greatlakeshospital",
  },
  alternates: {
    canonical: "https://www.greatlakeshospital.com",
  },
};

// RootLayout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.greatlakeshospital.com" />
        <meta name="robots" content="index, follow" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.greatlakeshospital.com" />
        <meta property="og:title" content="Great Lakes International Hospital" />
        <meta property="og:description" content="World-class healthcare services." />
        <meta property="og:image" content="https://www.greatlakeshospital.com/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Great Lakes International Hospital" />
        <meta name="twitter:description" content="Providing world-class healthcare services in Uganda." />
        <meta name="twitter:image" content="https://www.greatlakeshospital.com/images/twitter-card.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Great Lakes International Hospital",
              url: "https://www.greatlakeshospital.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "P.O. Box 909",
                addressLocality: "Fort Portal",
                addressRegion: "Western Region",
                postalCode: "256",
                addressCountry: "UG",
              },
              telephone: "+256705627072",
              description: "World-class healthcare services with compassion.",
              medicalSpecialty: "General Medicine",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
