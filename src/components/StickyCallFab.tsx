"use client";

import { useState } from "react";
import { Phone } from "@/components/Icons";

const PHONE_NUMBERS = [
  { label: "24/7 Emergency", num: "(219) 464-2000" },
];

export function StickyCallFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50" aria-live="polite">
      {/* Phone options menu */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col gap-2 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {PHONE_NUMBERS.map((phone) => (
          <a
            key={phone.num}
            href={`tel:+1${phone.num.replace(/\D/g, "")}`}
            className="flex items-center gap-3 bg-white shadow-elevated rounded-full px-5 py-3 whitespace-nowrap hover:bg-neutral-50 transition-colors"
          >
            <span>
              <span className="block text-xs text-neutral-500">{phone.label}</span>
              <span className="text-sm font-bold text-navy-900">{phone.num}</span>
            </span>
          </a>
        ))}
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gold-500 text-navy-900 shadow-elevated flex items-center justify-center hover:bg-gold-400 transition-all duration-300 active:scale-95"
        aria-expanded={open}
        aria-label="Call options"
      >
        <span className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20" />
        {open ? (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <Phone className="w-6 h-6 relative z-10" />
        )}
      </button>
    </div>
  );
}
