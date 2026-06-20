import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SERVICES,
  CITIES,
  type ServiceContent,
  type CityContent,
} from "@/lib/content";
import { Phone, ArrowRight } from "@/components/Icons";

// Generate all static pages for services and cities
export function generateStaticParams() {
  const serviceSlugs = Object.keys(SERVICES);
  const citySlugs = CITIES.map((c) => c.slug);

  return [...serviceSlugs, ...citySlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  const city = CITIES.find((c) => c.slug === slug);

  if (service) {
    return {
      title: service.title,
      description: service.description,
      alternates: { canonical: `https://www.sccsnwi.com/${slug}` },
    };
  }

  if (city) {
    return {
      title: `Restoration Services in ${city.name}, IN`,
      description: `SCCS NWI provides water, fire, and mold restoration in ${city.name}, ${city.county} County. 24/7 emergency response. Call (219) 464-2000.`,
      alternates: { canonical: `https://www.sccsnwi.com/${slug}` },
    };
  }

  return {};
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service: ServiceContent | undefined = SERVICES[slug];
  const city: CityContent | undefined = CITIES.find((c) => c.slug === slug);

  if (!service && !city) notFound();

  if (service) {
    return <ServicePage service={service} />;
  }

  if (city) {
    return <CityPage city={city} />;
  }

  notFound();
}

function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              Our services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              {service.heroSubtitle}
            </p>
            <a
              href="tel:+121****2000"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full bg-safety-500 text-white font-semibold hover:bg-safety-400 transition-colors active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              Call (219) 464-2000
            </a>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {service.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy-950">
                  {section.heading}
                </h2>
                <p className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {service.relatedServices.length > 0 && (
        <section className="py-24 md:py-32 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy-950">
              Related services
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.relatedServices.map((slug) => {
                const related = SERVICES[slug];
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group rounded-2xl bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <h3 className="font-semibold text-navy-950 group-hover:text-safety-500 transition-colors">
                      {related.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-navy-950 group-hover:text-safety-500 transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Emergency CTA */}
      <section className="py-24 md:py-32 bg-safety-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Need {service.title.toLowerCase()} now?
          </h2>
          <p className="mt-4 text-white/80">
            We are available 24/7 for emergencies. Call now.
          </p>
          <a
            href="tel:+121****2000"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-safety-500 font-bold text-lg hover:bg-white/90 transition-colors active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            (219) 464-2000
          </a>
        </div>
      </section>
    </>
  );
}

function CityPage({ city }: { city: CityContent }) {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              Proudly serving {city.name}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Restoration services
              <br />
              in {city.name}, Indiana
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              {city.description}. SCCS NWI provides 24/7 water, fire, and mold
              restoration throughout {city.county} County.
            </p>
            <a
              href="tel:+121****2000"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full bg-safety-500 text-white font-semibold hover:bg-safety-400 transition-colors active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              Call (219) 464-2000
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy-950">
            All services available in {city.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(SERVICES).map(([slug, service]) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group rounded-2xl bg-white p-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <h3 className="font-semibold text-navy-950 group-hover:text-safety-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-navy-950 group-hover:text-safety-500 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-safety-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            In {city.name} and need help now?
          </h2>
          <a
            href="tel:+121****2000"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-safety-500 font-bold text-lg hover:bg-white/90 transition-colors active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            (219) 464-2000
          </a>
        </div>
      </section>
    </>
  );
}
