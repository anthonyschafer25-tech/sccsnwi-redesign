import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoHero } from "@/components/VideoHero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { WhoWeAre } from "@/components/WhoWeAre";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { InstagramFeed } from "@/components/InstagramFeed";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = {
  title: "SCCS NWI | 24/7 Emergency Restoration — Water, Fire & Mold",
  description: "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency water, fire, mold remediation. IICRC certified.",
};

export default function Home() {
  return (<>
    <Navbar /><VideoHero /><TrustMarquee /><WhoWeAre /><BeforeAfter /><ServicesGrid />
    <ServiceAreaMap /><ProjectGallery /><ReviewCarousel /><InstagramFeed /><FAQ /><ContactSection />
    <Footer /><StickyCallFab />
  </>);
}
