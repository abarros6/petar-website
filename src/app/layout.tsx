import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const OG_IMAGE = "https://res.cloudinary.com/dxx7wooza/image/upload/w_1200,q_auto,f_jpg/living-room-1.jpg";
const SITE_URL = "https://pavcon.ca";
const TITLE = "Pavcon | Toronto Construction & Custom Home Builder";
const DESCRIPTION =
  "Toronto-based construction and custom home builder. Serving Southern Ontario for over 10 years with renovations, additions, custom builds, and multi-unit conversions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Pavcon",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Pavcon",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: "Pavcon renovation project — Toronto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Pavcon",
  url: SITE_URL,
  telephone: "+14163883989",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.6532, longitude: -79.3832 },
    geoRadius: "100000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Finishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Renovations" } },
    ],
  },
  sameAs: ["https://www.instagram.com/pavconhomesinc"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
