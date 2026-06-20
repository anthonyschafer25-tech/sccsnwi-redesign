"use client";

import { useState } from "react";
import { Star } from "@/components/Icons";

interface Review {
  name: string;
  time: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "Mike R.",
    time: "2 months ago",
    rating: 5,
    text: "They came out at 2 AM when our basement flooded. Had equipment running within the hour. Saved our finished basement. Professional, fast, and knew exactly what to do.",
  },
  {
    name: "Linda K.",
    time: "3 months ago",
    rating: 5,
    text: "After a house fire, SCCS handled everything, even dealing with our insurance. Professional, compassionate, thorough. They explained every step and kept us informed throughout.",
  },
  {
    name: "David M.",
    time: "1 month ago",
    rating: 5,
    text: "Found mold in our crawl space that two other companies missed. Their particle testing is legit. Explained everything clearly. The remediation was thorough and they fixed the moisture problem, not just the mold.",
  },
  {
    name: "Sarah T.",
    time: "4 months ago",
    rating: 5,
    text: "Water heater burst while we were on vacation. SCCS responded immediately, extracted all the water, set up drying equipment, and worked directly with our insurance. Incredible service.",
  },
  {
    name: "James P.",
    time: "1 week ago",
    rating: 5,
    text: "Called at 11 PM after discovering a leak in the ceiling. They walked me through shutting off the water and had a crew here by midnight. Can't ask for more than that.",
  },
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReview, setModalReview] = useState<Review | null>(null);

  const prev = () =>
    setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  const openModal = (review: Review) => {
    setModalReview(review);
    setModalOpen(true);
  };

  const review = REVIEWS[current];
  const prevIdx = current === 0 ? REVIEWS.length - 1 : current - 1;
  const nextIdx = current === REVIEWS.length - 1 ? 0 : current + 1;

  return (
    <section className="py-24 md:py-32 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Stars + rating */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-gold-500" />
          ))}
          <span className="ml-2 text-white/60 text-sm">5.0 from 73+ Google reviews</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display tracking-wider text-white">
          What Our Customers Say
        </h2>

        {/* Carousel */}
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* Previous (dimmed) */}
              <div className="hidden md:block w-48 opacity-30 scale-90 shrink-0">
                <ReviewCard review={REVIEWS[prevIdx]} />
              </div>

              {/* Current */}
              <div className="w-full max-w-md shrink-0">
                <ReviewCard
                  review={review}
                  active
                  onReadMore={() => openModal(review)}
                />
              </div>

              {/* Next (dimmed) */}
              <div className="hidden md:block w-48 opacity-30 scale-90 shrink-0">
                <ReviewCard review={REVIEWS[nextIdx]} />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous review"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-gold-500" : "bg-white/20"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next review"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Google CTA */}
        <a
          href="https://www.google.com/search?q=SCCS+NWI+Valparaiso+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 px-6 py-2.5 border border-white/20 rounded-sm text-sm font-medium text-white/70 hover:bg-white/5 transition-colors"
        >
          See All Google Reviews
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7m10 0v10" />
          </svg>
        </a>
      </div>

      {/* Modal */}
      {modalOpen && modalReview && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white text-navy-900 rounded-lg max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold">
                {modalReview.name[0]}
              </div>
              <div>
                <p className="font-semibold">{modalReview.name}</p>
                <p className="text-xs text-neutral-500">{modalReview.time}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(modalReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-500" />
              ))}
            </div>
            <p className="text-neutral-700 leading-relaxed">{modalReview.text}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 text-sm text-neutral-500 hover:text-navy-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function ReviewCard({
  review,
  active,
  onReadMore,
}: {
  review: Review;
  active?: boolean;
  onReadMore?: () => void;
}) {
  const isLong = review.text.length > 150;
  const displayText = active && isLong ? review.text.slice(0, 150) + "..." : review.text.slice(0, 100) + (review.text.length > 100 ? "..." : "");

  return (
    <div
      className={`rounded-lg p-6 text-left transition-all ${
        active
          ? "bg-white/5 border border-white/10"
          : "bg-white/[0.02] border border-white/5"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-9 h-9 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold">
          {review.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-xs text-white/40">{review.time}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-gold-500" />
        ))}
      </div>
      <p className="text-sm text-white/60 leading-relaxed">{displayText}</p>
      {active && isLong && onReadMore && (
        <button
          onClick={onReadMore}
          className="mt-2 text-xs text-gold-400 hover:text-gold-300 transition-colors"
        >
          Read More
        </button>
      )}
    </div>
  );
}
