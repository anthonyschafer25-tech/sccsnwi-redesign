import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold tracking-tighter text-navy-950">Privacy Policy</h1>
      <p className="mt-8 text-neutral-700 leading-relaxed">
        SCCS NWI respects your privacy. Information collected through our contact form is used solely to respond to your inquiry and provide restoration services. We do not sell, share, or distribute your personal information to third parties for marketing purposes. Phone calls may be recorded for quality assurance.
      </p>
    </div>
  );
}
