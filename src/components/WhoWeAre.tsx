import Link from "next/link";
import { ArrowRight, Shield, Users } from "@/components/Icons";

export function WhoWeAre() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Who We Are</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white leading-[1.1]">A restoration company that takes your emergency seriously.</h2>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-lg">SCCS NWI was founded in 2012 by Vinnie Nowarita after his own son got sick from hidden mold in their home. We are independently owned, IICRC certified, and answer to our neighbors — not a corporate office.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-all">More About SCCS <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:+121****2000" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold text-sm rounded-xl hover:bg-red-400 transition-all">(219) 464-2000</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-bg-800 relative overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent flex items-end justify-start p-6"><div className="px-3 py-1.5 bg-bg-900 text-white text-xs font-semibold rounded-lg border border-border">On The Job</div></div>
            </div>
            <div className="absolute -bottom-6 -left-6 right-6 flex gap-4">
              <div className="flex-1 bg-bg-800 border border-border rounded-xl p-4 shadow-card"><Shield className="w-5 h-5 text-red-500 mb-2" /><p className="text-xl font-bold text-white">IICRC</p><p className="text-xs text-text-tertiary">Certified Firm</p></div>
              <div className="flex-1 bg-bg-800 border border-border rounded-xl p-4 shadow-card"><Users className="w-5 h-5 text-red-500 mb-2" /><p className="text-xl font-bold text-white">2012</p><p className="text-xs text-text-tertiary">Family Owned</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
