import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Contact SCCS NWI for 24/7 emergency restoration. Call (219) 464-2000." };

export default function ContactPage() {
  return (<>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28"><div className="max-w-7xl mx-auto px-6"><span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Get In Touch</span><h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">We answer the phone. Day or night.</h1></div></section>
      <section className="pb-24 md:pb-32"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6"><Clock className="w-6 h-6 text-red-400 mb-3" /><h2 className="text-lg font-bold text-white">24/7 Emergency Line</h2><a href="tel:+121****2000" className="block mt-2 text-2xl font-bold text-red-400 hover:text-red-300 transition-colors">(219) 464-2000</a><p className="mt-1 text-sm text-text-secondary">A real person answers, not an answering service.</p></div>
          <div className="space-y-5">
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-bg-800 border border-border flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-red-400" /></div><div><p className="text-xs text-text-tertiary">Phone</p><a href="tel:+121****2000" className="text-white font-semibold hover:text-red-400 transition-colors">(219) 464-2000</a></div></div>
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-bg-800 border border-border flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-red-400" /></div><div><p className="text-xs text-text-tertiary">Email</p><a href="mailto:info@sccsnwi.com" className="text-white font-semibold hover:text-red-400 transition-colors">info@sccsnwi.com</a></div></div>
            <div className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-bg-800 border border-border flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-red-400" /></div><div><p className="text-xs text-text-tertiary">Address</p><p className="text-white font-semibold">Valparaiso, IN 46383</p><p className="text-xs text-text-tertiary mt-0.5">Porter · Lake · La Porte</p></div></div>
          </div>
        </div>
        <ContactForm />
      </div></div></section>
    </main>
    <Footer /><StickyCallFab />
  </>);
}
