import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
// import Footer from "@/components/Footer";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title:
    "Happy Birthday Pastor Temitope — A Celebration of Faith, Love & Legacy",
  description:
    "Join us in celebrating a life of faith, grace and love. Share your birthday wishes, view memories, and write a heartfelt letter to Pastor Temitope on her special day.",
  openGraph: {
    title:
      "Happy Birthday Pastor Temitope — A Celebration of Faith, Love & Legacy",
    description:
      "Join us in celebrating a life of faith, grace and love. Share your birthday wishes, view memories, and write a heartfelt letter to Pastor Temitope on her special day.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Pastor Temitope",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday Pastor",
    description: "A celebration of faith, love & legacy",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ScrollToTop />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
