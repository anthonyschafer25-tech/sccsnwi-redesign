"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "@/components/Icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-soft border-b border-neutral-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/sccs-logo.png"
              alt="SCCS NWI"
              width={140}
              height={70}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-charcoal-900/70 hover:text-charcoal-900 hover:bg-surface-100"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+121****2000"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-charcoal-900/60 hover:text-charcoal-900" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              (219) 464-2000
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-400 transition-all active:scale-[0.98]"
            >
              Free Inspection
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`absolute block w-5 h-0.5 transition-all duration-300 ${scrolled ? "bg-charcoal-900" : "bg-white"} ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute block w-5 h-0.5 transition-all duration-300 ${scrolled ? "bg-charcoal-900" : "bg-white"} ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-charcoal-950/95 backdrop-blur-xl transition-opacity duration-400 md:hidden flex flex-col items-center justify-center gap-4 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl font-display text-white tracking-wide hover:text-red-400 transition-colors"
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-8 px-10 py-3.5 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-400 transition-colors"
        >
          Free Inspection
        </Link>
      </div>
    </>
  );
}
