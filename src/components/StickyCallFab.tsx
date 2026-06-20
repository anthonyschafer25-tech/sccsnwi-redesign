"use client";

import { useState } from "react";
import { Phone } from "@/components/Icons";

export function StickyCallFab() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`absolute bottom-16 right-0 flex flex-col gap-2 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <a href="tel:+121****2000" className="flex items-center gap-3 bg-white shadow-elevated rounded-xl px-5 py-3 hover:bg-surface-50 transition-colors">
          <span><span className="block text-xs text-neutral-500">24/7 Emergency</span><span className="text-sm font-bold text-charcoal-900">(219) 464-2000</span></span>
        </a>
      </div>
      <button onClick={() => setOpen(!open)} className="w-14 h-14 rounded-2xl bg-red-500 text-white shadow-elevated flex items-center justify-center hover:bg-red-400 transition-all active:scale-95" aria-expanded={open} aria-label="Call options">
        <span className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20" />
        {open ? <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <Phone className="w-6 h-6 relative z-10" />}
      </button>
    </div>
  );
}
