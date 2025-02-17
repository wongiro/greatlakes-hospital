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
  title: "Great Lakes International Hospital | Healthcare Excellence in Fort Portal, Uganda",
  description:
    "Great Lakes International Hospital provides world-class healthcare services with compassion, advanced technology, and skilled medical professionals in Fort Portal, Uganda. Best hospital in Fort Portal for general medicine, cardiology, and pediatrics.",
  keywords: "hospital, healthcare, medical services, Fort Portal, Uganda, international hospital, patient care, advanced technology, best hospital in Fort Portal, top healthcare in Uganda",
  authors: [{ name: 'Great Lakes International Hospital' }],
  robots: "index, follow",
  openGraph: {
    title: "Great Lakes International Hospital | Healthcare Excellence",
    description:
      "World-class healthcare services with compassion and advanced technology in Fort Portal, Uganda.",
    url: "https://www.greatlakesinternationalhospital.com",
    type: "website",
    images: [
      {
        url: "https://www.greatlakesinternationalhospital.com/images/og-image.webp", // Updated to WebP format
        width: 1200,
        height: 630,
        alt: "Great Lakes International Hospital in Fort Portal, Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Lakes International Hospital",
    description:
      "Providing world-class healthcare services in Fort Portal, Uganda.",
    images: "https://www.greatlakesinternationalhospital.com/images/twitter-card.webp", // Updated to WebP format
    site: "@greatlakeshospital",
  },
  alternates: {
    canonical: "https://www.greatlakesinternationalhospital.com",
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
        <link rel="canonical" href="https://www.greatlakesinternationalhospital.com" />
        <meta name="robots" content="index, follow" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.greatlakesinternationalhospital.com" />
        <meta property="og:title" content="Great Lakes International Hospital | Healthcare Excellence" />
        <meta property="og:description" content="World-class healthcare services in Fort Portal, Uganda." />
        <meta property="og:image" content="https://www.greatlakesinternationalhospital.com/images/og-image.webp" /> {/* Updated to WebP format */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Great Lakes International Hospital" />
        <meta name="twitter:description" content="Providing world-class healthcare services in Fort Portal, Uganda." />
        <meta name="twitter:image" content="https://www.greatlakesinternationalhospital.com/images/twitter-card.webp" /> {/* Updated to WebP format */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Great Lakes International Hospital",
              url: "https://www.greatlakesinternationalhospital.com",
              image: "https://www.greatlakesinternationalhospital.com/images/logo.webp", // Updated to WebP format
              address: {
                "@type": "PostalAddress",
                streetAddress: "P.O. Box 909",
                addressLocality: "Fort Portal",
                addressRegion: "Western Region",
                postalCode: "256",
                addressCountry: "UG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "0.654444",
                longitude: "30.274444", 
              },
              telephone: "+256705627072",
              openingHours: "Mo-Su 24/7",
              description: "World-class healthcare services with compassion.",
              medicalSpecialty: ["General Medicine", "Cardiology", "Pediatrics"],
              sameAs: [
                "https://www.facebook.com/greatlakesinternationalhospital",
                "https://twitter.com/greatlakesinternationalhospital",
                "https://www.instagram.com/greatlakesinternationalhospital",
              ],
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