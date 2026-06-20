import Link from "next/link";
import {
  Phone,
  Droplet,
  Flame,
  Warning,
  Wrench,
  Shield,
  Star,
  MapPin,
  Clock,
  ArrowRight,
} from "@/components/Icons";

const SERVICES = [
  {
    icon: Droplet,
    title: "Water Damage",
    description:
      "Emergency water extraction, structural drying, and full restoration. We respond within 60 minutes.",
    href: "/water-damage-restoration",
  },
  {
    icon: Flame,
    title: "Fire Damage",
    description:
      "Smoke and soot cleanup, structural repairs, and content restoration after a fire.",
    href: "/fire-damage-restoration",
  },
  {
    icon: Warning,
    title: "Mold Remediation",
    description:
      "Professional mold inspection, testing, and removal. We find the source, not just the symptom.",
    href: "/mold-remediation",
  },
  {
    icon: Shield,
    title: "Trauma Cleanup",
    description:
      "Discreet, compassionate crime scene and trauma cleanup. Available 24/7 with complete confidentiality.",
    href: "/crime-scene-cleanup",
  },
];

const TRUST_SIGNALS = [
  { label: "Founded", value: "2012" },
  { label: "Google Rating", value: "5.0" },
  { label: "Reviews", value: "73+" },
  { label: "Response Time", value: "< 60 min" },
];

const CITIES = [
  "Valparaiso",
  "Portage",
  "Chesterton",
  "Michigan City",
  "Crown Point",
  "Merrillville",
  "Hobart",
  "La Porte",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,101,26,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              24/7 Emergency Response
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
              When disaster strikes,
              <br />
              <span className="text-safety-400">we restore.</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              Family-owned restoration company serving Northwest Indiana since
              2012. Water, fire, mold. We answer the phone at 3 AM.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+121****2000"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-safety-500 text-white font-semibold hover:bg-safety-400 transition-colors duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Call (219) 464-2000
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-200"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {signal.value}
                </p>
                <p className="text-xs text-white/40 mt-1 tracking-wider uppercase">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-950">
              What we do
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              From emergency water extraction to full mold remediation, we
              handle the mess so you can get back to normal.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-2xl bg-white p-8 shadow-soft hover:shadow-card transition-all duration-300"
              >
                {/* Outer shell (double-bezel) */}
                <div className="absolute inset-[3px] rounded-[calc(1rem-3px)] border border-navy-950/5 pointer-events-none" />
                <div className="w-10 h-10 rounded-xl bg-safety-500/10 flex items-center justify-center mb-5 group-hover:bg-safety-500/15 transition-colors">
                  <service.icon className="w-5 h-5 text-safety-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-950 group-hover:text-safety-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed max-w-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-navy-950 group-hover:text-safety-500 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-950 hover:text-safety-500 transition-colors"
            >
              See all 15 services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiator section */}
      <section className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,101,26,0.08),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Not a franchise.
                <br />
                Not constrained by insurance lists.
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
                SCCS NWI was founded in 2012 by Vinnie Nowarita after his own
                son got sick from hidden mold in their home. We are
                independently owned, IICRC certified, and answer to our
                neighbors, not a corporate office. We use advanced particle-ID
                mold testing that goes beyond what most restoration companies
                offer.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-safety-400 font-medium hover:text-safety-300 transition-colors"
              >
                Read our story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "12+", label: "Years serving NWI" },
                { num: "24/7", label: "Emergency response" },
                { num: "IICRC", label: "Certified technicians" },
                { num: "3", label: "Counties covered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 border border-white/5 p-6"
                >
                  <p className="text-2xl md:text-3xl font-bold text-safety-400 tracking-tight">
                    {stat.num}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-950">
              Serving all of Northwest Indiana
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Porter, Lake, and La Porte counties. Over 30 cities. If you are
              in NWI, we are nearby.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {CITIES.map((city) => (
              <Link
                key={city}
                href={`/services-${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 rounded-full border border-navy-950/10 text-sm text-navy-950 hover:bg-navy-950 hover:text-white transition-colors duration-200"
              >
                {city}
              </Link>
            ))}
            <Link
              href="/service-area"
              className="px-4 py-2 rounded-full bg-navy-950 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              + 25 more
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-24 md:py-32 bg-safety-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Clock className="w-8 h-8 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              24/7 Emergency Response
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Water doesn't wait for business hours. Neither do we. Call now
              and a real person answers, day or night.
            </p>
            <a
              href="tel:+121****2000"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-safety-500 font-bold text-lg hover:bg-white/90 transition-colors active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              (219) 464-2000
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-safety-500" />
              ))}
            </div>
            <span className="text-sm font-medium text-navy-950">
              5.0 from 73+ Google reviews
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "They came out at 2 AM when our basement flooded. Had equipment running within the hour. Saved our finished basement.",
                name: "Mike R.",
                loc: "Valparaiso",
              },
              {
                text: "After a house fire, SCCS handled everything, even dealing with our insurance. Professional, compassionate, thorough.",
                name: "Linda K.",
                loc: "Chesterton",
              },
              {
                text: "Found mold in our crawl space that two other companies missed. Their particle testing is legit. Explained everything clearly.",
                name: "David M.",
                loc: "Portage",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <p className="text-sm text-navy-950 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-navy-950/5">
                  <p className="text-sm font-semibold text-navy-950">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-500">{review.loc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-950 hover:text-safety-500 transition-colors"
            >
              Read all reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
