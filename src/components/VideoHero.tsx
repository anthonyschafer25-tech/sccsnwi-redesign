"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "@/components/Icons";

export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[950px] flex items-center justify-center overflow-hidden bg-bg-950">
      {/* Hero video — autoplay, muted, loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark vignette overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-950/90 via-bg-950/40 to-bg-950/40" />
      
      {/* Subtle red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,37,66,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Image
          src="/sccs-logo.png"
          alt="SCCS NWI"
          width={400}
          height={200}
          className="h-auto w-72 sm:w-[28rem] mx-auto mb-8 drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          priority
        />

        <p className="text-text-secondary text-lg md:text-xl tracking-wide max-w-xl mx-auto leading-relaxed font-medium">
          Family-owned restoration. Water, fire, mold.<br />Serving Northwest Indiana since 2012.
        </p>

        <p className="text-text-tertiary text-sm mt-8 mb-10 tracking-wide">
          Porter County · Lake County · La Porte County
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+121****2000"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-xl hover:bg-red-400 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(212,37,66,0.3)]"
          >
            <Phone className="w-5 h-5" />
            (219) 464-2000
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white font-bold text-lg rounded-xl hover:bg-white/5 transition-all"
          >
            Free Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}
