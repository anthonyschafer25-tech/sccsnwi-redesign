"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "@/components/Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (<>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-bg-950/95 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="shrink-0"><Image src="/sccs-logo.png" alt="SCCS NWI" width={130} height={65} className="h-8 w-auto" priority /></Link>
        
        {/* Desktop nav — All City style: each link as its own bar */}
        <nav className="hidden md:flex items-center gap-1.5">
          <Link href="/" className="px-5 py-2 bg-white/5 border border-white/5 text-sm font-semibold text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10 rounded-lg transition-all">Home</Link>
          <Link href="/about" className="px-5 py-2 bg-white/5 border border-white/5 text-sm font-semibold text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10 rounded-lg transition-all">About</Link>
          <Link href="/services" className="px-5 py-2 bg-white/5 border border-white/5 text-sm font-semibold text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10 rounded-lg transition-all">Services</Link>
          <Link href="/contact" className="px-5 py-2 bg-white/5 border border-white/5 text-sm font-semibold text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/10 rounded-lg transition-all">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+121****2000" className="text-sm font-bold text-white hover:text-red-400 transition-colors"><Phone className="w-4 h-4 inline mr-1" />(219) 464-2000</a>
          <Link href="/contact" className="px-5 py-2.5 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-400 transition-all active:scale-[0.98]">Free Inspection</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden relative w-8 h-8 flex items-center justify-center" aria-label="Menu">
          <span className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>
    </header>
    <div className={`fixed inset-0 z-40 bg-bg-950/95 backdrop-blur-xl transition-opacity md:hidden flex flex-col items-center justify-center gap-4 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)}>
      {["Home","About","Services","Contact"].map((l,i) => <Link key={l} href={`/${l.toLowerCase()}`} className="text-2xl font-display text-white tracking-wide hover:text-red-400 transition-colors" style={{transitionDelay:open?`${i*60}ms`:"0ms"}}>{l}</Link>)}
      <Link href="/contact" className="mt-8 px-10 py-3.5 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-red-400 transition-colors">Free Inspection</Link>
    </div>
  </>);
}
