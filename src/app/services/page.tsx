import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplet,
  Flame,
  Warning,
  Shield,
  Wrench,
  Search,
  ArrowRight,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete restoration services: water damage, fire damage, mold remediation, trauma cleanup, and more. 24/7 emergency response across NW Indiana.",
};

const ALL_SERVICES = [
  {
    icon: Droplet,
    title: "Water Damage Restoration",
    description:
      "Emergency water extraction, structural drying, dehumidification, and full restoration.",
    href: "/water-damage-restoration",
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description:
      "Smoke and soot cleanup, structural repairs, content cleaning, and odor removal.",
    href: "/fire-damage-restoration",
  },
  {
    icon: Warning,
    title: "Mold Inspection and Testing",
    description:
      "Advanced particle-ID mold testing, air quality assessment, and detailed reports.",
    href: "/mold-inspection-and-testing",
  },
  {
    icon: Warning,
    title: "Mold Remediation",
    description:
      "Complete mold removal with containment, HEPA filtration, and source elimination.",
    href: "/mold-remediation",
  },
  {
    icon: Warning,
    title: "Mold Mitigation",
    description:
      "Preventative measures to control moisture and prevent future mold growth.",
    href: "/mold-mitigation",
  },
  {
    icon: Flame,
    title: "Smoke Damage Restoration",
    description:
      "Smoke residue cleanup, thermal fogging, ozone treatment, and air scrubbing.",
    href: "/smoke-damage",
  },
  {
    icon: Search,
    title: "Smoke Testing",
    description:
      "Identify hidden smoke pathways and damage using specialized testing equipment.",
    href: "/smoke-testing",
  },
  {
    icon: Wrench,
    title: "Soot Removal",
    description:
      "Professional soot cleanup from walls, ceilings, contents, and HVAC systems.",
    href: "/soot-removal",
  },
  {
    icon: Wrench,
    title: "Structural Drying",
    description:
      "Industrial-grade dehumidification and air movement to dry building materials.",
    href: "/structural-drying",
  },
  {
    icon: Shield,
    title: "Content Cleaning and Storage",
    description:
      "Pack-out, cleaning, and secure storage of personal belongings during restoration.",
    href: "/content-cleaning-storage",
  },
  {
    icon: Droplet,
    title: "Flood Clean Up",
    description:
      "Rapid water removal, sanitization, and drying after flooding from storms or plumbing failures.",
    href: "/flood-clean-up",
  },
  {
    icon: Droplet,
    title: "Water Removal",
    description:
      "High-capacity extraction of standing water using truck-mounted and portable units.",
    href: "/water-removal",
  },
  {
    icon: Wrench,
    title: "Junk Removal",
    description:
      "Removal and disposal of damaged materials, debris, and unwanted items.",
    href: "/junk-removal",
  },
  {
    icon: Shield,
    title: "Crime Scene Cleanup",
    description:
      "Discreet, certified biohazard remediation and trauma scene cleanup. Available 24/7.",
    href: "/crime-scene-cleanup",
  },
  {
    icon: Search,
    title: "Air Quality Testing",
    description:
      "Indoor air quality assessment to measure mold spore levels and identify contamination.",
    href: "/air-quality-testing-to-measure-mold-levels",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              What we do
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Complete restoration
              <br />
              services under one roof.
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              From emergency water extraction to full mold remediation. One
              call handles everything.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl bg-white p-8 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-safety-500/10 flex items-center justify-center mb-5 group-hover:bg-safety-500/15 transition-colors">
                  <service.icon className="w-5 h-5 text-safety-500" />
                </div>
                <h3 className="font-semibold text-navy-950 group-hover:text-safety-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-navy-950 group-hover:text-safety-500 transition-colors">
                  Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
