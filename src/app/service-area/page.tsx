import type { Metadata } from "next";
import { CITIES } from "@/lib/content";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = { title: "Service Area" };

export default function Page() {
  return (<>
    <Navbar /><main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28"><div className="max-w-7xl mx-auto px-6"><span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Where We Work</span><h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">Service Area</h1><p className="mt-6 text-text-secondary max-w-xl">Serving Porter, Lake, and La Porte counties across Northwest Indiana.</p></div></section>
      <section className="pb-24 md:pb-32"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">{CITIES.map(c => <Link key={c.slug} href={`/${c.slug}`} className="px-4 py-3 rounded-xl bg-bg-800 border border-border text-sm text-text-secondary hover:text-white hover:border-white/20 transition-all">{c.name}</Link>)}</div></div></section>
    </main>
    <Footer /><StickyCallFab />
  </>);
}
