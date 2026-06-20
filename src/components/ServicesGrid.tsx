import Link from "next/link";
import { Droplet, Flame, Warning, ArrowRight } from "@/components/Icons";

const SERVICES = [
  { icon: Droplet, title: "Water Damage", desc: "Emergency extraction, structural drying, full restoration. 60-minute response.", href: "/water-damage-restoration" },
  { icon: Flame, title: "Fire Damage", desc: "Smoke cleanup, soot removal, structural repairs. Insurance claim assistance.", href: "/fire-damage-restoration" },
  { icon: Warning, title: "Mold Remediation", desc: "Advanced particle-ID testing, containment, source elimination.", href: "/mold-remediation" },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-surface-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] uppercase text-red-500 font-semibold">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-charcoal-900">The damage, handled.</h2>
          <p className="mt-4 text-neutral-700 max-w-xl mx-auto">Storm restoration is the core. Everything else is what we address while we are there.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((svc) => (
            <Link key={svc.title} href={svc.href} className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors">
                <svc.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-900">{svc.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-charcoal-900 group-hover:text-red-500 transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-900 hover:text-red-500 transition-colors">See All 15 Services <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}
