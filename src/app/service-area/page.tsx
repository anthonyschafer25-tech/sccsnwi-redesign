import type { Metadata } from "next";
import { CITIES } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area",
  description: "SCCS NWI serves Porter, Lake, and La Porte counties in Northwest Indiana. Over 30 cities. Call (219) 464-2000.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Service area</h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl">Serving Porter, Lake, and La Porte counties across Northwest Indiana.</p>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CITIES.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="px-4 py-3 rounded-xl bg-white shadow-soft text-sm font-medium text-navy-950 hover:text-safety-500 hover:shadow-card transition-all">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
