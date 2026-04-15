import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@/styles/fonts.css";
import { site } from "@/content/site";
import Header from "./_components/Header";
import MegaFooter from "./_components/sections/MegaFooter";
import SiteJsonLd from "./_components/SiteJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.shortTagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "web development",
    "app development",
    "landing page",
    "MVP development",
    "Next.js developer",
    "React developer",
    "freelance developer",
    "solo developer",
    "BekerDev",
    "Ebubeker Rexha",
  ],
  authors: [{ name: site.founder.name, url: site.social.linkedin }],
  creator: site.founder.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} · ${site.shortTagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.shortTagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteJsonLd />
        <div className="antialiased px-4">
          <Header />
          {children}
        </div>
        <MegaFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
