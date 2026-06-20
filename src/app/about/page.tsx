import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Family-owned restoration company founded in 2012 after a personal experience with hidden mold. Independently operated, IICRC certified.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-safety-400 text-sm font-medium tracking-wider uppercase mb-4">
              Our story
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Founded because mold
              <br />
              made our family sick.
            </h1>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-950">
                It started with a hidden problem.
              </h2>
              <p className="mt-6 text-neutral-700 leading-relaxed">
                In 2012, Vinnie Nowarita discovered that hidden mold in his own
                home was the cause of his son's persistent respiratory issues.
                After multiple doctors, it was an advanced particle-ID mold test
                that finally identified the culprit — mold growing behind walls
                and in the crawl space where standard inspections had missed it.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                That experience drove Vinnie to found SCCS NWI. Not as a
                franchise, not constrained by insurance company "approved
                vendor" lists that prioritize cost over thoroughness. An
                independent, family-owned company answerable only to the
                families and businesses we serve.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "IICRC Certified",
                  text: "All technicians hold current IICRC certifications in water damage, fire restoration, and mold remediation.",
                },
                {
                  icon: Users,
                  title: "Independently Owned",
                  text: "Not a franchise. We make decisions locally, hire locally, and reinvest in Northwest Indiana.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-safety-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-safety-500" />
                  </div>
                  <h3 className="font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-950 max-w-2xl">
            Why we are different from franchise restoration companies
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced mold testing",
                text: "We use particle-ID technology that identifies mold species at the microscopic level. Standard air samples often miss what we find.",
              },
              {
                title: "Not constrained by insurance lists",
                text: "Franchise restoration companies often work from insurance 'approved vendor' lists with pre-negotiated pricing that incentivizes speed over quality. We work for you.",
              },
              {
                title: "Real 24/7 response",
                text: "When you call at 3 AM, you talk to a person who can dispatch a crew, not an answering service that takes a message.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-soft"
              >
                <h3 className="font-semibold text-navy-950 text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-950">
              Certifications and insurance
            </h2>
            <div className="mt-8 space-y-3">
              {[
                "IICRC Certified Firm — Water Damage Restoration",
                "IICRC Certified Firm — Fire and Smoke Restoration",
                "IICRC Certified Firm — Applied Microbial Remediation",
                "Fully licensed and insured in the State of Indiana",
                "EPA Lead-Safe Certified",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-safety-500 shrink-0" />
                  <span className="text-neutral-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-safety-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to work with a local team?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-safety-500 font-bold text-lg hover:bg-white/90 transition-colors active:scale-[0.98]"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
