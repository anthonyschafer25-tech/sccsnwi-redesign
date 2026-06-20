"use client";

import { useRef, useEffect } from "react";

const PLACEHOLDER_ITEMS = [
  "Water Extraction",
  "Structural Drying",
  "Mold Containment",
  "Fire Cleanup",
  "Roof Tarping",
  "Content Cleaning",
  "Flood Response",
  "Smoke Removal",
];

export function ProjectGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let pos = 0;
    const speed = 0.3;

    const animate = () => {
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-navy-900/40 font-medium">
            Recent Work
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display tracking-wider text-navy-900">
            Restoration projects across NWI.
          </h2>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-4 w-max px-6">
        {[...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS].map((label, i) => (
          <div
            key={i}
            className="w-72 h-48 shrink-0 rounded-lg bg-neutral-100 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/5 to-transparent" />
            <span className="text-xs text-navy-900/20 font-medium tracking-wider uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors"
        >
          See All Services
        </a>
      </div>
    </section>
  );
}
