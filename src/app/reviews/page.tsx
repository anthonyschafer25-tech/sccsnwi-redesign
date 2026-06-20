import type { Metadata } from "next";
import { Star } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews",
  description: "See what our customers say. 5.0 stars from 73+ Google reviews. Water, fire, mold restoration in NW Indiana.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Reviews</h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-safety-400" />)}</div>
            <span className="text-lg font-medium">5.0 from 73+ Google reviews</span>
          </div>
          <p className="mt-4 text-white/60">See what our customers say about our restoration services.</p>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-neutral-700">Visit our Google Business Profile to read all reviews.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-safety-500 text-white font-medium hover:bg-safety-400 transition-colors">Contact us</Link>
        </div>
      </section>
    </>
  );
}
