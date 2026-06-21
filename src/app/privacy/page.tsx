import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (<>
    <Navbar /><main className="pt-32 pb-24"><div className="max-w-3xl mx-auto px-6"><h1 className="text-4xl font-display tracking-tight text-white">Privacy Policy</h1><p className="mt-8 text-text-secondary leading-relaxed">SCCS NWI respects your privacy. Information collected through our contact form is used solely to respond to your inquiry. We do not sell or share your personal information.</p></div></main>
    <Footer /><StickyCallFab />
  </>);
}
