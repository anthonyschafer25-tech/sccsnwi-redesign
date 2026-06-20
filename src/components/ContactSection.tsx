"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "@/components/Icons";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Get Started</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-white">Think you have damage?</h2>
            <p className="mt-4 text-white/50 max-w-md leading-relaxed">Free inspection. No pressure. If you have a real claim, we will tell you. If you do not, we will tell you that too.</p>
            <div className="mt-8 space-y-4">
              <a href="tel:+121****2000" className="flex items-center gap-3 text-white hover:text-red-400 transition-colors"><Phone className="w-5 h-5 text-red-500" /><span className="text-lg font-semibold">(219) 464-2000</span></a>
              <a href="mailto:info@sccsnwi.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"><Mail className="w-5 h-5" /><span className="text-sm">info@sccsnwi.com</span></a>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-white/30 mt-0.5 shrink-0" /><div><p className="text-sm text-white/50">Valparaiso, IN 46383</p><p className="text-xs text-white/20 mt-0.5">Porter · Lake · La Porte counties</p></div></div>
            </div>
            <div className="mt-8"><p className="text-xs tracking-[0.15em] uppercase text-white/30 font-semibold mb-2">Service Area</p><p className="text-sm text-white/40">Valparaiso · Portage · Chesterton · Michigan City · Crown Point · Merrillville · Hobart and 25+ more</p></div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-charcoal-900 shadow-elevated">
            <h3 className="text-xl font-bold mb-1">Free Inspection Request</h3>
            <p className="text-sm text-neutral-500 mb-6">We will call you within 24 hours.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">First Name</label><input type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all" placeholder="First" /></div>
                <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">Last Name</label><input type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all" placeholder="Last" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">Phone</label><input type="tel" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all" placeholder="(219) 555-1234" /></div>
              <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">Email</label><input type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all" placeholder="you@email.com" /></div>
              <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">Service Needed</label><select className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-white transition-all"><option value="">Select a service</option><option>Water Damage</option><option>Fire Damage</option><option>Mold Inspection</option><option>Mold Remediation</option><option>Storm Damage</option><option>Other</option></select></div>
              <div><label className="block text-xs font-semibold text-charcoal-900/50 uppercase tracking-[0.1em] mb-1.5">Tell us about the damage</label><textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 resize-none transition-all" placeholder="Describe what happened..." /></div>
              <button type="submit" className="w-full py-3.5 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Request Free Inspection</button>
              <p className="text-xs text-neutral-400 text-center">By submitting, you agree to be contacted about your inspection.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
