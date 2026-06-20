"use client";
import { useState } from "react";

const FAQS = [
  { q: "Do you really handle the entire insurance claim?", a: "Yes. We document the damage, meet your adjuster on site, supply photo reports and scope of work, and handle the paperwork." },
  { q: "How fast can you respond to an emergency?", a: "We answer the phone 24/7 and typically have a crew on site within 60 minutes for water emergencies in Porter, Lake, and La Porte counties." },
  { q: "What areas do you serve?", a: "All of Northwest Indiana — Porter County, Lake County, and La Porte County. Valparaiso, Portage, Chesterton, Michigan City, Crown Point, Merrillville, Hobart, and 25+ other cities." },
  { q: "Are you licensed and insured?", a: "Yes. SCCS NWI is fully licensed, insured, and IICRC certified in water damage restoration, fire and smoke restoration, and applied microbial remediation." },
  { q: "What makes your mold testing different?", a: "We use advanced particle-ID technology that identifies mold species at the microscopic level. Standard air samples often miss what we find." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Common Questions</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white">Straight answers.</h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq,i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx===i?null:i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bg-800 transition-colors" aria-expanded={openIdx===i}>
                <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center"><svg viewBox="0 0 24 24" className={`w-5 h-5 text-text-tertiary transition-transform duration-300 ${openIdx===i?"rotate-45":""}`} fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx===i?"max-h-96":"max-h-0"}`}><div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{faq.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
