import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@/styles/fonts.css";

/**
 * Minimal root layout. All site chrome (Header, Footer, JSON-LD, metadata)
 * lives in route-group layouts (app/[locale]/layout.tsx for the agency site
 * and app/blog/layout.tsx for the English-only blog) so they can compose
 * per-locale content.
 *
 * `<html lang>` is hardcoded to "en" here because this layout is the parent
 * of every locale segment. Per-locale metadata, og:locale, and hreflang
 * alternates are emitted from the nested layouts.
 */

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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
