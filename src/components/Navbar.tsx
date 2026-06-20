"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "@/components/Icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <nav
          className={`flex items-center gap-8 px-6 py-3 rounded-full border border-navy-950/5 backdrop-blur-xl bg-warm-50/80 transition-all duration-500 ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-semibold text-sm tracking-tight text-navy-950">
              SCCS NWI
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-neutral-700 hover:text-navy-950 rounded-full hover:bg-navy-950/5 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="tel:+12194642000"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-safety-500 text-white text-sm font-medium hover:bg-safety-400 transition-colors duration-200 active:scale-[0.98]"
          >
            <Phone className="w-3.5 h-3.5" />
            (219) 464-2000
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-navy-950/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute block w-4 h-[1.5px] bg-navy-950 transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute block w-4 h-[1.5px] bg-navy-950 transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-xl transition-opacity duration-500 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-4 top-24 z-50 rounded-2xl bg-white shadow-elevated p-8 transition-all duration-500 md:hidden ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-navy-950 font-medium py-3 px-4 -mx-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200"
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="tel:+12194642000"
          className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-safety-500 text-white font-medium hover:bg-safety-400 transition-colors duration-200 active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          Call (219) 464-2000
        </a>
      </div>
    </>
  );
}
