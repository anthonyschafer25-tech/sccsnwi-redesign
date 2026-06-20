import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmergencyCTA } from "@/components/EmergencyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SCCS NWI | 24/7 Emergency Restoration — Water, Fire & Mold",
    template: "%s | SCCS NWI",
  },
  description:
    "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency water, fire, mold remediation. IICRC certified. Serving Porter, Lake & La Porte counties.",
  openGraph: {
    title: "SCCS NWI | 24/7 Emergency Restoration",
    description:
      "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency water, fire, mold remediation. Call now.",
    url: "https://www.sccsnwi.com",
    siteName: "SCCS NWI",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.sccsnwi.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-warm-50 text-navy-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmergencyCTA />
      </body>
    </html>
  );
}
