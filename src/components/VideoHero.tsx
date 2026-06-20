import Image from "next/image";
import Link from "next/link";
import { Phone } from "@/components/Icons";

// Placeholder background until video is available
export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background placeholder — dark navy gradient with radial wash */}
      <div className="absolute inset-0 bg-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,184,0,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(22,66,140,0.25),transparent_50%)]" />
      </div>

      {/* Grid pattern overlay (Pixler-style) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <Image
          src="/sccs-logo.png"
          alt="SCCS NWI"
          width={360}
          height={180}
          className="h-auto w-72 sm:w-96 mx-auto mb-6 drop-shadow-lg"
          priority
        />

        {/* Subtitle */}
        <p className="text-white/80 text-sm sm:text-base tracking-[0.2em] uppercase mb-8 font-medium">
          Water Damage · Fire Damage · Mold Remediation
        </p>

        <p className="text-white/50 text-sm mb-10 max-w-lg mx-auto">
          Porter County · Lake County · La Porte County · Northwest Indiana
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+121****2000"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-bold text-lg rounded-sm hover:bg-gold-400 transition-colors active:translate-y-px"
          >
            <Phone className="w-5 h-5" />
            (219) 464-2000
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-sm hover:bg-white/10 transition-colors"
          >
            Free Inspection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
