import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { Shield, Users, Star, ArrowRight } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "SCCS NWI was founded by Vinnie Nowarita after his son got sick from hidden mold. Family-owned, IICRC certified restoration serving NW Indiana since 2012.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-charcoal-950 text-white pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,30,58,0.12),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Our Story</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
                Founded because mold<br />
                made our family sick.
              </h1>
              <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
                In 2004, Vinnie Nowarita moved his family to Northwest Indiana. His young son Mick started having severe respiratory issues. The cause? Mold lurking beneath their carpet.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display tracking-tight text-charcoal-900 leading-[1.1]">
                  It started with a hidden problem.
                </h2>
                <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    In 2004, Vinnie and his family moved to Northwest Indiana. Almost immediately, his young son Mick began experiencing severe respiratory issues that doctors could not explain. After years of searching for answers, they discovered the cause: mold growing beneath their home's carpet, hidden from view.
                  </p>
                  <p>
                    In 2007, another water leak led to more mold, affecting his son Will. A two-year battle with their insurance company followed — an experience that opened Vinnie's eyes to how families are treated after property damage.
                  </p>
                  <p>
                    By 2013, Vinnie left his sales career to launch SCCS NWI — Specialty Cleaning and Construction Services. His mission: give Northwest Indiana families the thorough, honest restoration service his own family needed but could not find.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl bg-surface-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-900/20 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white text-lg font-semibold">Vinnie Nowarita</p>
                      <p className="text-white/60 text-sm">Founder, SCCS NWI</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-500 text-white rounded-2xl px-6 py-4 shadow-elevated">
                  <p className="text-2xl font-bold">2012</p>
                  <p className="text-xs text-white/70">Established</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission + Stats */}
        <section className="py-20 md:py-28 bg-surface-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { num: "2012", label: "Founded" },
                { num: "24/7", label: "Emergency Response" },
                { num: "IICRC", label: "Certified Firm" },
                { num: "3", label: "Counties Served" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-8 shadow-soft">
                  <p className="text-3xl font-bold text-red-500">{s.num}</p>
                  <p className="text-sm text-neutral-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-xs tracking-[0.15em] uppercase text-red-500 font-semibold">What Sets Us Apart</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-charcoal-900">
                Not a franchise. Not constrained by insurance lists.
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Shield,
                  title: "Advanced Mold Testing",
                  text: "We use particle-ID technology that identifies mold species at the microscopic level. Standard air samples miss what we find behind walls and in crawl spaces.",
                },
                {
                  icon: Users,
                  title: "Family Owned, Locally Operated",
                  text: "Vinnie and his son Mick work directly with every client. We are not a franchise with a corporate office making decisions about your home.",
                },
                {
                  icon: Star,
                  title: "We Work for You, Not Insurance",
                  text: "Franchise restoration companies answer to insurance-approved vendor lists. We answer to you. Our loyalty is to the homeowner, not the carrier.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-bold text-charcoal-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 md:py-28 bg-surface-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display tracking-tight text-charcoal-900">Certifications & Insurance</h2>
              <div className="mt-8 space-y-3">
                {[
                  "IICRC Certified Firm — Water Damage Restoration",
                  "IICRC Certified Firm — Fire and Smoke Restoration",
                  "IICRC Certified Firm — Applied Microbial Remediation",
                  "Fully licensed and insured in the State of Indiana",
                  "EPA Lead-Safe Certified",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft">
                    <Shield className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm text-charcoal-900 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Magazine Feature */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-charcoal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,30,58,0.15),transparent_50%)]" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Featured In</span>
                  <h2 className="mt-4 text-2xl md:text-3xl font-display tracking-tight">
                    "Vinnie Nowarita and SCCS NWI's Journey to Create Healthier Homes"
                  </h2>
                  <p className="mt-4 text-white/50 text-sm leading-relaxed">
                    Northwest Indiana Real Producers magazine featured our story — how a father's determination to protect his family grew into a mission to serve the entire region.
                  </p>
                  <p className="mt-2 text-white/30 text-xs">
                    By Giavonni Downing · Photography by Melinda Nicole
                  </p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-surface-100/10 flex items-center justify-center">
                  <p className="text-white/20 text-sm">Magazine Feature — Northwest Indiana Real Producers · Page 25</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-red-500 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display tracking-tight">Ready to work with a local team?</h2>
            <p className="mt-4 text-white/80">Free inspection. Honest assessment. No pressure.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/contact" className="px-8 py-3.5 bg-white text-red-500 font-bold rounded-xl hover:bg-white/90 transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+121****2000" className="px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                (219) 464-2000
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallFab />
    </>
  );
}
