import Link from "next/link";
import { ArrowRight, Shield, Users } from "@/components/Icons";

export function WhoWeAre() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-navy-900/40 font-medium">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display tracking-wider text-navy-900 leading-[1.05]">
              A restoration company that takes your emergency seriously.
            </h2>
            <p className="mt-6 text-neutral-700 leading-relaxed max-w-lg">
              SCCS NWI was founded in 2012 by Vinnie Nowarita after his own son got sick from hidden mold in their home. We are independently owned, IICRC certified, and answer to our neighbors, not a corporate office. We use advanced particle-ID mold testing that goes beyond what most restoration companies offer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-900 text-navy-900 font-bold text-sm rounded-sm hover:bg-navy-900 hover:text-white transition-colors"
              >
                More About SCCS
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+121****2000"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-bold text-sm rounded-sm hover:bg-gold-400 transition-colors"
              >
                (219) 464-2000
              </a>
            </div>
          </div>

          {/* Image placeholder + tag */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg bg-neutral-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/10 to-transparent flex items-end justify-start p-6">
                <div className="px-3 py-1.5 bg-navy-900 text-white text-xs font-semibold rounded-sm tracking-wider">
                  On The Job
                </div>
              </div>
            </div>
            {/* Trust stat cards */}
            <div className="absolute -bottom-6 -left-6 right-6 flex gap-4">
              <div className="flex-1 bg-white shadow-elevated rounded-lg p-4">
                <Shield className="w-5 h-5 text-gold-500 mb-2" />
                <p className="text-xl font-bold text-navy-900">IICRC</p>
                <p className="text-xs text-neutral-500">Certified Firm</p>
              </div>
              <div className="flex-1 bg-white shadow-elevated rounded-lg p-4">
                <Users className="w-5 h-5 text-gold-500 mb-2" />
                <p className="text-xl font-bold text-navy-900">2012</p>
                <p className="text-xs text-neutral-500">Family Owned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
