import Link from "next/link";
import { Droplet, Flame, Warning, ArrowRight } from "@/components/Icons";

const SERVICES = [
  {
    icon: Droplet,
    title: "Water Damage",
    desc: "Emergency extraction, structural drying, full restoration. 60-minute response.",
    href: "/water-damage-restoration",
  },
  {
    icon: Flame,
    title: "Fire Damage",
    desc: "Smoke cleanup, soot removal, structural repairs. Insurance claim assistance.",
    href: "/fire-damage-restoration",
  },
  {
    icon: Warning,
    title: "Mold Remediation",
    desc: "Advanced particle-ID testing, containment, source elimination.",
    href: "/mold-remediation",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-900/40 font-medium">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display tracking-wider text-navy-900">
            The damage, handled.
          </h2>
          <p className="mt-4 text-neutral-700 max-w-xl mx-auto">
            Storm restoration is the core. Everything else is what we address while we are there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group bg-white rounded-lg p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-sm bg-navy-900/5 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 transition-colors">
                <svc.icon className="w-6 h-6 text-navy-900 group-hover:text-gold-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{svc.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors"
          >
            See All 15 Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
