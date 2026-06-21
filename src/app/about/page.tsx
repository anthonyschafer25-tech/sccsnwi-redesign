import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";
import { Shield, Users, Star, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "SCCS NWI was founded by Vinnie Nowarita after his son got sick from hidden mold. Family-owned, IICRC certified.",
};

export default function AboutPage() {
  return (<>
    <Navbar />
    <main>
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,30,58,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">Our Story</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white leading-[1.05]">Founded because mold made our family sick.</h1>
            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">In 2004, Vinnie Nowarita moved his family to Northwest Indiana. His young son Mick started having severe respiratory issues. The cause? Mold lurking beneath their carpet.</p>
          </div>
        </div>
      </section>

      {/* Origin Story with photo */}
      <section className="py-20 md:py-28 bg-bg-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white leading-[1.1]">It started with a hidden problem.</h2>
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                <p>In 2004, Vinnie and his family moved to Northwest Indiana. Almost immediately, his young son Mick began experiencing severe respiratory issues. After years of searching, they discovered mold growing beneath their home's carpet.</p>
                <p>In 2007, another water leak led to more mold, affecting his son Will. A two-year battle with their insurance company opened Vinnie's eyes to how families are treated after property damage.</p>
                <p>By 2013, Vinnie left his sales career to launch SCCS NWI. His mission: give Northwest Indiana families the honest restoration service his own family needed.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <Image src="/vinnie-hazmat.png" alt="Vinnie Nowarita in hazmat suit performing mold remediation" width={800} height={1000} className="w-full h-auto" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-bg-950/80 backdrop-blur text-white text-xs rounded-lg">Vinnie Nowarita — Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-bg-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{num:"2012",label:"Founded"},{num:"24/7",label:"Emergency"},{num:"IICRC",label:"Certified"},{num:"3",label:"Counties"}].map(s => <div key={s.label} className="bg-bg-800 border border-border rounded-2xl p-6"><p className="text-3xl font-bold text-red-500">{s.num}</p><p className="text-sm text-text-tertiary mt-1">{s.label}</p></div>)}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl"><span className="text-xs tracking-[0.15em] uppercase text-red-400 font-semibold">What Sets Us Apart</span><h2 className="mt-4 text-3xl md:text-4xl font-display tracking-tight text-white">Not a franchise. Not constrained by insurance lists.</h2></div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[{icon:Shield,title:"Advanced Mold Testing",text:"Particle-ID technology identifies mold at the microscopic level — standard air samples miss what we find."},{icon:Users,title:"Family Owned, Local",text:"Vinnie and his son Mick work directly with every client. No corporate office making decisions about your home."},{icon:Star,title:"We Work for You",text:"Franchise companies answer to insurance vendor lists. We answer to you — our loyalty is to the homeowner."}].map(item => <div key={item.title} className="bg-bg-800 border border-border rounded-2xl p-6"><div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4"><item.icon className="w-5 h-5 text-red-500" /></div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-bg-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl"><h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">Certifications & Insurance</h2>
            <div className="mt-8 space-y-3">
              {["IICRC Certified — Water Damage Restoration","IICRC Certified — Fire and Smoke Restoration","IICRC Certified — Applied Microbial Remediation","Fully licensed and insured in Indiana","EPA Lead-Safe Certified"].map(cert => <div key={cert} className="flex items-center gap-3 p-4 bg-bg-800 border border-border rounded-xl"><Shield className="w-5 h-5 text-red-500 shrink-0" /><span className="text-sm text-white font-medium">{cert}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Magazine + Family Photo */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-bg-800 border border-border rounded-2xl p-6">
              <Image src="/vinnie-portrait.png" alt="Vinnie Nowarita - SCCS NWI Partner Spotlight" width={800} height={600} className="w-full h-auto rounded-xl" />
              <p className="mt-4 text-sm text-text-secondary text-center">Featured in Northwest Indiana Real Producers</p>
            </div>
            <div className="bg-bg-800 border border-border rounded-2xl p-6">
              <Image src="/vinnie-family.png" alt="Vinnie Nowarita with family" width={800} height={600} className="w-full h-auto rounded-xl" />
              <p className="mt-4 text-sm text-text-secondary text-center">Vinnie with family — the reason SCCS exists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-red-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">Ready to work with a local team?</h2>
          <p className="mt-4 text-white/80">Free inspection. Honest assessment. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/contact" className="px-8 py-3.5 bg-white text-red-500 font-bold rounded-xl hover:bg-white/90 transition-all active:scale-[0.98]">Get In Touch <ArrowRight className="w-4 h-4 inline" /></Link>
            <a href="tel:+121****2000" className="px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">(219) 464-2000</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyCallFab />
  </>);
}
