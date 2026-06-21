"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "@/components/Icons";

export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[950px] flex items-center justify-center overflow-hidden bg-bg-950">
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover hidden md:block">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover md:hidden">
        <source src="/hero-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-950/85 via-bg-950/35 to-bg-950/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,37,66,0.06),transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Image src="/sccs-logo.png" alt="SCCS NWI" width={400} height={200} className="h-auto w-56 sm:w-72 md:w-[26rem] mx-auto mb-6 md:mb-8 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]" priority />
        
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide max-w-2xl mx-auto leading-snug">
          Family-owned restoration. Water, fire, mold.<br />Serving Northwest Indiana since 2012.
        </p>

        <p className="text-text-secondary text-sm sm:text-base md:text-lg font-semibold mt-6 md:mt-8 mb-8 md:mb-10 tracking-wide">
          Porter County · Lake County · La Porte County
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a href="tel:+121****2000" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-red-500 text-white font-bold text-base md:text-lg rounded-xl hover:bg-red-400 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(212,37,66,0.3)]"><Phone className="w-4 md:w-5 h-4 md:h-5" />(219) 464-2000</a>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 border-2 border-white/20 text-white font-bold text-base md:text-lg rounded-xl hover:bg-white/5 transition-all">Free Inspection</Link>
        </div>
      </div>
    </section>
  );
}
