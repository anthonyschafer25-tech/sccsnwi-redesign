import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div><span className="text-xs tracking-[0.15em] uppercase text-white/30">Ready to talk</span><h3 className="text-2xl font-display tracking-tight text-white mt-1">Get a quote in 24 hours.</h3></div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-all">Request a Quote</Link>
            <a href="tel:+121****2000" className="px-6 py-3 border border-white/15 text-white font-semibold rounded-lg hover:bg-white/5 transition-all">(219) 464-2000</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/"><Image src="/sccs-logo.png" alt="SCCS NWI" width={120} height={60} className="h-8 w-auto brightness-0 invert" /></Link>
            <p className="mt-4 text-sm text-white/30 max-w-xs leading-relaxed">Family-owned restoration company serving Northwest Indiana since 2012. 24/7 emergency response for water, fire, and mold.</p>
          </div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/25 mb-4">Navigate</h4><ul className="space-y-2.5">{["Home","About","Services","Contact","Service Area","Reviews"].map(l=><li key={l}><Link href={`/${l.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-white/40 hover:text-white transition-colors">{l}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/25 mb-4">Services</h4><ul className="space-y-2.5">{["Water Damage","Fire Damage","Mold Remediation","Mold Inspection","Smoke Damage","Trauma Cleanup"].map(s=><li key={s}><Link href={`/${s.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-white/40 hover:text-white transition-colors">{s}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/25 mb-4">Contact</h4><ul className="space-y-3">
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-red-500 shrink-0" /><a href="tel:+121****2000" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">(219) 464-2000</a></li>
            <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-white/20 shrink-0" /><span className="text-sm text-white/30">Valparaiso, IN 46383</span></li>
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-white/20 shrink-0" /><a href="mailto:info@sccsnwi.com" className="text-sm text-white/40 hover:text-white transition-colors">info@sccsnwi.com</a></li>
          </ul></div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/15">
          <p>&copy; 2026 SCCS NWI. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/privacy" className="hover:text-white/30 transition-colors">Privacy Policy</Link><Link href="/terms" className="hover:text-white/30 transition-colors">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
