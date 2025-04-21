import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: '%s | My Blog',
    default: 'My Blog',
  },
  description: "A personal blog built with Next.js",
  openGraph: {
    title: 'My Blog',
    description: 'A personal blog built with Next.js',
    type: 'website',
    url: 'https://myblog.com',
    siteName: 'My Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Blog',
    description: 'A personal blog built with Next.js',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex w-full h-full min-h-screen flex-col justify-between max-w-7xl mx-auto bg-secondary bg-pattern`}>
        <div className="w-full h-full bg-background min-h-screen flex flex-col justify-between">
          <div>
            <Navigation />
            <div className="px-4 sm:px-6">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
