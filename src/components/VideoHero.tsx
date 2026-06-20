import Image from "next/image";
import Link from "next/link";
import { Phone } from "@/components/Icons";

export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background — dark gradient */}
      <div className="absolute inset-0 bg-charcoal-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,30,58,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(72,72,74,0.15),transparent_50%)]" />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/30" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <Image
          src="/sccs-logo.png"
          alt="SCCS NWI"
          width={320}
          height={160}
          className="h-auto w-64 sm:w-80 mx-auto mb-6 drop-shadow-lg"
          priority
        />

        <p className="text-white/60 text-base tracking-wide max-w-lg mx-auto leading-relaxed">
          Family-owned restoration. Water, fire, mold. Serving Northwest Indiana since 2012.
        </p>

        <p className="text-white/30 text-sm mt-6 mb-10">
          Porter County · Lake County · La Porte County
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+121****2000"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-all active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            (219) 464-2000
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Free Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}
