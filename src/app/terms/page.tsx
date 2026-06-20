import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold tracking-tighter text-navy-950">Terms of Service</h1>
      <p className="mt-8 text-neutral-700 leading-relaxed">
        By using our services, you agree to these terms. SCCS NWI provides restoration services as described in written estimates. Payment terms are outlined in individual service agreements. SCCS NWI is fully licensed and insured in the State of Indiana.
      </p>
    </div>
  );
}
