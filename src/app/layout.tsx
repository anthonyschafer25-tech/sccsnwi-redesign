import type { Metadata } from "next";
import { Inter, Bebas_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
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
      "Family-owned restoration company serving NW Indiana since 2012.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-navy-900 font-sans">
        <main className="flex-1 overflow-x-hidden w-full max-w-full">{children}</main>
      </body>
    </html>
  );
}
