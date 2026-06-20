import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, CITY_SERVICE_PAGES } from "@/lib/content";
import { Phone, ArrowRight } from "@/components/Icons";

// Generate all service+city combo pages
export function generateStaticParams() {
  return CITY_SERVICE_PAGES.map((p) => ({
    service: p.service,
    city: p.city,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = SERVICES[serviceSlug];
  const page = CITY_SERVICE_PAGES.find(
    (p) => p.service === serviceSlug && p.city === citySlug
  );

  if (!service || !page) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${page.serviceTitle} in ${page.cityName}, IN`,
    description: `Professional ${page.serviceTitle.toLowerCase()} in ${page.cityName}, Indiana. 24/7 emergency response. IICRC certified. Call (219) 464-2000.`,
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = SERVICES[serviceSlug];
  const page = CITY_SERVICE_PAGES.find(
    (p) => p.service === serviceSlug && p.city === citySlug
  );

  if (!service || !page) notFound();

  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              {page.cityName}, Indiana
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              {page.serviceTitle}
              <br />
              in {page.cityName}
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              SCCS NWI provides professional {page.serviceTitle.toLowerCase()}{" "}
              in {page.cityName} and throughout Northwest Indiana. Available
              24/7 for emergencies.
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

      {/* Service content (abbreviated) */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {service.sections.slice(0, 2).map((section) => (
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
          <div className="mt-12">
            <Link
              href={`/${serviceSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-safety-500 hover:text-safety-400 transition-colors"
            >
              Full {page.serviceTitle.toLowerCase()} details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-24 md:py-32 bg-safety-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Need {page.serviceTitle.toLowerCase()} in {page.cityName}?
          </h2>
          <p className="mt-4 text-white/80">
            We serve {page.cityName} and all of Northwest Indiana. Call now for
            immediate help.
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
