"use client";

import { useState, useEffect, useRef } from "react";
import { Phone } from "@/components/Icons";

export function StickyCallFab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50">
      {/* Expanded panel */}
      <div
        className={`absolute bottom-[72px] right-0 w-64 bg-white rounded-2xl shadow-elevated border border-neutral-100 overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-4 border-b border-neutral-100">
          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Call Us Now</p>
          <p className="text-xs text-neutral-400 mt-0.5">24/7 Emergency Response</p>
        </div>
        <a
          href="tel:+121****2000"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-4 hover:bg-surface-50 transition-colors border-b border-neutral-50"
        >
          <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-red-500" />
          </div>
          <div>
            <p className="text-xs text-neutral-500">Main Office</p>
            <p className="text-sm font-bold text-charcoal-900">(219) 464-2000</p>
          </div>
        </a>
        <a
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-3.5 hover:bg-surface-50 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-charcoal-900/5 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-charcoal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Prefer email?</p>
            <p className="text-sm font-bold text-charcoal-900">Request a Quote</p>
          </div>
        </a>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-14 h-14 rounded-2xl bg-red-500 text-white shadow-elevated flex items-center justify-center hover:bg-red-400 transition-all active:scale-95"
        aria-expanded={open}
        aria-label="Contact options"
      >
        <span className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20" />
        {open ? (
          <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <Phone className="w-5 h-5 relative z-10" />
        )}
      </button>
    </div>
  );
}
