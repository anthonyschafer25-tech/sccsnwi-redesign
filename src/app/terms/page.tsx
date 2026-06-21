import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCallFab } from "@/components/StickyCallFab";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Page() {
  return (<>
    <Navbar /><main className="pt-32 pb-24"><div className="max-w-3xl mx-auto px-6"><h1 className="text-4xl font-display tracking-tight text-white">Terms of Service</h1><p className="mt-8 text-text-secondary leading-relaxed">By using our services, you agree to these terms. SCCS NWI provides restoration services as described in written estimates. Fully licensed and insured in Indiana.</p></div></main>
    <Footer /><StickyCallFab />
  </>);
}
