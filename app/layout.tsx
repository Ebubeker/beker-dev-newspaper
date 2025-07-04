import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "BekerDev | Portfolio",
  description:
    "A 20-year-old Web Developer from Albania with 2.5 years of professional experience, skilled in building modern web applications using React.js, Next.js, Vue.js, Node.js, and Python.",
  openGraph: {
    title: "BekerDev | Portfolio",
    description: "A 20-year-old Web Developer from Albania with 2.5 years of professional experience, skilled in building modern web applications using React.js, Next.js, Vue.js, Node.js, and Python.",
    url: "https://example.com",
    siteName: "BekerDev",
    images: [
      {
        url: "https://beker.dev/assets/home.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt Text",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BekerDev | Portfolio",
    description: "A 20-year-old Web Developer from Albania with 2.5 years of professional experience, skilled in building modern web applications using React.js, Next.js, Vue.js, Node.js, and Python.",
    images: ["https://beker.dev/assets/home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`antialiased px-4`}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
