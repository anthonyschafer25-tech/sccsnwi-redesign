import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-bg-900 border-t border-border">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <span className="text-xs tracking-[0.15em] uppercase text-text-tertiary">Ready to talk</span>
          <h3 className="mt-2 text-2xl md:text-3xl font-display tracking-tight text-white">Get a quote in 24 hours.</h3>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all active:scale-[0.98]">Request a Quote</Link>
            <a href="tel:+121****2000" className="px-6 py-3 border border-border text-white font-semibold rounded-xl hover:bg-bg-700 transition-all">(219) 464-2000</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/"><Image src="/sccs-logo.png" alt="SCCS NWI" width={120} height={60} className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" /></Link>
            <p className="mt-4 text-sm text-text-tertiary max-w-xs leading-relaxed">Family-owned restoration company serving Northwest Indiana since 2012. 24/7 emergency response.</p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/sccsnwi" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="Instagram"><Instagram /></a>
              <a href="https://facebook.com/sccsnwi" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="Facebook"><Facebook /></a>
              <a href="https://youtube.com/channel/UColP0SsCnNmIj4BkDG3co4w" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-bg-800 flex items-center justify-center text-text-tertiary hover:bg-bg-700 hover:text-white transition-all" aria-label="YouTube"><Youtube /></a>
            </div>
          </div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Navigate</h4><ul className="space-y-2.5">{["Home","About","Services","Contact","Service Area","Reviews"].map(l=><li key={l}><Link href={`/${l.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-text-secondary hover:text-white transition-colors">{l}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Services</h4><ul className="space-y-2.5">{["Water Damage","Fire Damage","Mold Remediation","Mold Inspection","Smoke Damage","Trauma Cleanup"].map(s=><li key={s}><Link href={`/${s.toLowerCase().replace(/\s+/g,"-")}`} className="text-sm text-text-secondary hover:text-white transition-colors">{s}</Link></li>)}</ul></div>
          <div><h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-4">Contact</h4><ul className="space-y-3"><li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-red-500 shrink-0" /><a href="tel:+121****2000" className="text-sm text-white font-semibold hover:text-red-400 transition-colors">(219) 464-2000</a></li><li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-text-tertiary shrink-0" /><span className="text-sm text-text-secondary">Valparaiso, IN 46383</span></li><li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-text-tertiary shrink-0" /><a href="mailto:info@sccsnwi.com" className="text-sm text-text-secondary hover:text-white transition-colors">info@sccsnwi.com</a></li></ul></div>
        </div>
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary"><p>&copy; 2026 SCCS NWI. All rights reserved.</p><div className="flex gap-6"><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></div></div>
      </div>
    </footer>
  );
}

function Instagram({ className = "w-5 h-5" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function Facebook({ className = "w-5 h-5" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>; }
function Youtube({ className = "w-5 h-5" }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.94 29.94 0 001 11.75a29.94 29.94 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.94 29.94 0 00.46-5.25 29.94 29.94 0 00-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>; }
