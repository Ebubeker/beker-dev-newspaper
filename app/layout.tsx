import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "BekerDev | Full-Stack Developer - React, Next.js, Python",
  description:
    "A 20-year-old Web Developer from Albania with 3 years of experience, skilled in modern web apps using React.js, Next.js, Vue.js, Node.js, and in data science.",
  openGraph: {
    title: "BekerDev | Full-Stack Developer - React, Next.js, Python",
    description: "A 20-year-old Web Developer from Albania with 3 years of experience, skilled in modern web apps using React.js, Next.js, Vue.js, Node.js, and in data science.",
    url: "https://beker.dev",
    siteName: "BekerDev",
    images: [
      {
        url: "https://beker.dev/assets/home.png",
        width: 1200,
        height: 630,
        alt: "BekerDev",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BekerDev | Full-Stack Developer - React, Next.js, Python",
    description: "A 20-year-old Web Developer from Albania with 3 years of experience, skilled in modern web apps using React.js, Next.js, Vue.js, Node.js, and in data science.",
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
