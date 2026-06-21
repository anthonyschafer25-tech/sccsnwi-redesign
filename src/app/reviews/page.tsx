import type { Metadata } from "next";
import { Star } from "@/components/Icons";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = { title: "Reviews" };

export default function Page() {
  return (<>
    <Navbar /><main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28"><div className="max-w-7xl mx-auto px-6"><span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Testimonials</span><h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white">Reviews</h1><div className="flex items-center gap-3 mt-4">{[...Array(5)].map((_,i)=><Star key={i} className="w-5 h-5 text-red-500" />)}<span className="text-text-secondary font-medium">5.0 from 73+ Google reviews</span></div></div></section>
      <section className="pb-24 md:pb-32"><div className="max-w-2xl mx-auto px-6 text-center"><p className="text-text-secondary">Visit our Google Business Profile to read all reviews.</p><Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-all">Contact us</Link></div></section>
    </main>
    <Footer /><StickyCallFab />
  </>);
}
