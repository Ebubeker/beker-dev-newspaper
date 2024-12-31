import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "BekerDev | Portfolio",
  description:
    "A 20 year old Web Developer from Albania with 2.5 years of professional experience. I have worked using React JS, Next JS, Vue JS, Node JS and python",
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
